import { Empty, Spin } from "antd";
import React, { useEffect, useState, useRef } from "react";
import { toast } from "react-toastify";

import { ChartContainer } from "./styles";
import { fetchChatVisualization } from "components/chatbot/apis";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  BarController,
  LineController,
  PointElement,
  LineElement,
  PieController,
  ArcElement,
  Colors,
} from "chart.js";
import zoomPlugin from "chartjs-plugin-zoom";

// Register all necessary components of Chart.js
ChartJS.register(
  ArcElement,
  PieController,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  BarController,
  LineController,
  LineElement,
  PointElement,
  zoomPlugin,
  Colors
);

const _json = {
  type: "bar",
  data: {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Monthly Sales (in USD)",
        data: [12000, 15000, 10000, 18000, 17000, 22000, 25000],
      },
      {
        label: "Monthly Profit (in USD)",
        data: [3000, 4000, 2000, 5000, 4500, 6000, 8000],
      },
      {
        label: "Growth Rate (%)",
        data: [15000, 15000, 5000, 2000, 18000, 2500, 30000],
      },
    ],
  },
  options: {
    aspectRatio: 2,
    maintainAspectRatio: true,
    responsive: true,
    plugins: {
      zoom: {
        pan: {
          enabled: true,
          mode: "xy",
          limits: {
            x: { min: 10, max: 100 }, // Set limits for X-axis zoom
            y: { min: 0, max: 200 }, // Set limits for Y-axis zoom
          },
        },
        zoom: {
          limits: {
            x: { min: 10, max: 100 }, // Set limits for X-axis zoom
            y: { min: 0, max: 200 }, // Set limits for Y-axis zoom
          },
          wheel: {
            enabled: true,
          },
          pinch: {
            enabled: true,
          },
          mode: "xy",
          enabled: true,
        },
      },
      legend: {
        position: "top",
        labels: {
          font: {
            size: 12,
          },
        },
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            let label = context.dataset.label || "";
            if (label) {
              label += ": ";
            }
            label += context.raw;
            if (context.dataset.label.includes("Rate")) {
              label += "%";
            } else {
              label += " USD";
            }
            return label;
          },
        },
      },
      colors: {
        enabled: true
      }
    },
    scales: {
      x: {
        grid: {
          display: true,
          color: "rgba(200, 200, 200, 0.3)",
        },
        title: {
          display: true,
          text: "Months",
          font: {
            size: 14,
          },
        },
      },
      y: {
        grid: {
          color: "rgba(200, 200, 200, 0.3)",
        },
        title: {
          display: true,
          text: "Amount (USD) / Growth Rate (%)",
          font: {
            size: 14,
          },
        },
        ticks: {
          beginAtZero: true,
        },
      },
    },
    interaction: {
      mode: "index",
      intersect: false,
    },
    animation: {
      duration: 1000,
      easing: "easeInOutQuart",
    },
  },
};

const ChatVisualization = ({ data, unique_uuid }) => {
  const [config, setConfig] = useState(data);
  const [loading, setLoading] = useState(false);
  const chartRef = useRef(null);

  const populateData = async () => {
    setLoading(true);
    await fetchChatVisualization(unique_uuid)
      .then((response) => {
        setConfig(response.data);
      })
      .catch((error) => {
        toast.error(`${error.response.status}: ${error.response.statusText}`);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    if (!config) {
      populateData();
    }
    /* eslint-disable-next-line */
  }, []);

  useEffect(() => {
    if (config && chartRef.current) {
      // Initialize the chart once the config is loaded
      const ctx = chartRef.current.getContext("2d");
      const chart = new ChartJS(ctx, _json);
      // Cleanup function to destroy the chart when the component unmounts or config changes
      return () => {
        chart.destroy();
      };
    }
  }, [config]);

  return loading ? (
    <Spin />
  ) : !config ? (
    <Empty />
  ) : (
    <ChartContainer>
      <canvas ref={chartRef} width="400" height="400"></canvas>
    </ChartContainer>
  );
};

export default ChatVisualization;
