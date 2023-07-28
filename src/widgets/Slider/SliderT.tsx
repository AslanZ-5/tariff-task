import { Slider } from "antd";
import type { SliderMarks } from "antd/es/slider";
import classes from "./SliderT.module.scss";
import { styled } from "styled-components";
import icon from "../../assets/icon.svg";
import icon2 from "../../assets/icon2.svg";

interface SliteTPropsT {
  marks: SliderMarks;
  color: string;
  onChange: (value: number) => void;
  value: number;
}

const SliderT = ({ marks, color, onChange, value }: SliteTPropsT) => {
  const marksVal = typeof marks === "object" ? Object.keys(marks) : [];
  const minVal = Number(marksVal[0]);
  const maxVal = Number(marksVal[marksVal.length - 1]);
  const handler = color === "black" ? icon2 : icon;
  const StyledSlider = styled(Slider)`
    .ant-slider-track {
      background-color: ${color};
      height: 10px;
      border-radius: 10px;
    }
    .ant-slider-rail {
      background-color: #b8c6cf;
      height: 10px;
      border-radius: 10px;
    }
    .ant-slider-dot {
      display: none;
    }
    .ant-slider-handle {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      transform: translateY(-22px) !important;
      background: url(${handler});
    }
    // .ant-slider-handle:hover {
    //   background-color: red;
    // }

    .ant-slider-handle::before {
      display: none;
    }

    .ant-slider-handle::after {
      display: none;
    }
    .ant-slider-mark {
      margin-top: 50px;
      text-align: center;
      font-size: 24px;
      font-style: normal;
      font-weight: 500;
      line-height: 100%;
      letter-spacing: -0.72px;
    }
  `;

  return (
    <>
      <StyledSlider
        value={value}
        onChange={onChange}
        tooltip={{ open: false }}
        className={classes.SliderT}
        min={minVal}
        max={maxVal}
        marks={marks}
        step={null}
        defaultValue={minVal}
      />
    </>
  );
};

export default SliderT;
