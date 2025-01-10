import { Empty, Spin } from "antd";
import React, { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";

import { ChartContainer } from "./styles";
import { ReactComponent as SIcon } from "assets/icons/s.svg";
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

const _chart_json = {
  type: "bar",
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
      duration: 600,
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
        setConfig(response.data.visualization);
        _chart_json["data"] = response.data.visualization.chart_data;
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
      const chart = new ChartJS(ctx, _chart_json);
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
      <SIcon />
      <div id="chart-container">
        <strong id="headline">{config.query}</strong>
        <canvas ref={chartRef} width="400" height="400"></canvas>
      </div>
    </ChartContainer>
  );
};

export default ChatVisualization;
