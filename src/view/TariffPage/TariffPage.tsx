import SliderT from "../../widgets/Slider";
import { useState } from "react";
import { useAppSelector, useAppDispatch } from "../../hooks";
import { setTariff } from "../../features/tariff/tariffSlice";
import SocialMediaCheckBox from "../../widgets/SocialMediaCheckbox";
import classes from "./TariffPage.module.scss";

const TariffPage = () => {
  const tariff = useAppSelector((state) => state.tariff);
  const dispatch = useAppDispatch();
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const handleWifiCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setTariff({ name: "wiFi", value: e.target.name }));
  };
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
    const re =
      /\+7\s?[\(]{0,1}9[0-9]{2}[\)]{0,1}\s?\d{3}[-]{0,1}\d{2}[-]{0,1}\d{2}/;
    if (!re.test(String(e.target.value))) {
      setPhoneError("Phone number is not valid");
    } else {
      setPhoneError("");
      dispatch(setTariff({ name: "phone", value: phone }));
    }
  };
  const handleOperatorChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setTariff({ name: "operator", value: e.target.value }));
  };
  const sliderMinutesChangeHandler = (value: number) => {
    dispatch(setTariff({ name: "minutes", value }));
  };
  const sliderSMSChangeHandler = (value: number) => {
    dispatch(setTariff({ name: "sms", value }));
  };
  const sliderInternetChangeHandler = (value: number) => {
    dispatch(setTariff({ name: "internet", value }));
  };

  return (
    <div className={classes.tariff__page}>
      <h1 className={classes.main__header}>Настройте тариф</h1>
      <div className={classes.tariff__form}>
        <label className={classes.section}>
          <h6 className={classes.header}>Телефон</h6>
          <input
            className={classes.input__phone}
            type="tel"
            value={phone}
            placeholder="+7(___)___-__-__"
            required
            onChange={handlePhoneChange}
          />
          {phoneError ? (
            <p className={classes.errormessage}>{phoneError}</p>
          ) : (
            <p>Обязательное поле</p>
          )}
        </label>
        <label className={classes.section}>
          <h6 className={classes.header}>Оператор</h6>
          <select
            className={classes.input__operator}
            name="operators"
            id="operators"
            onChange={handleOperatorChange}
          >
            <option value="оператор1">оператор 1</option>
            <option value="оператор2">оператор 2</option>
            <option value="оператор3">оператор 3</option>
            <option value="оператор4">оператор 4</option>
          </select>
        </label>
        <div className={classes.section}>
          <h6 className={classes.header}>Минуты</h6>
          <SliderT
            value={tariff.minutes}
            onChange={sliderMinutesChangeHandler}
            marks={{
              200: "200",
              350: "350",
              600: "600",
              650: "650",
            }}
            color={"#7a5cfa"}
          />
        </div>
        <div className={classes.section}>
          <h6 className={classes.header}>СМС</h6>
          <SliderT
            value={tariff.sms}
            marks={{
              0: "0",
              50: "50",
              100: "100",
              150: "150",
            }}
            color={"#7a5cfa"}
            onChange={sliderSMSChangeHandler}
          />
        </div>

        <div className={classes.section}>
          <h6 className={classes.header}>Интернет</h6>
          <SliderT
            value={tariff.internet}
            onChange={sliderInternetChangeHandler}
            marks={{
              5: "5",
              15: "15",
              30: "30",
              35: "35",
            }}
            color={"black"}
          />
        </div>
        <div className={`${classes.section}`}>
          <h6 className={classes.header}>Wi-Fi роутер</h6>
          <div className={classes.wifi}>
            <label className={classes.check}>
              <input
                className={classes.wifi__check}
                type="checkbox"
                name="rent"
                value="99"
                checked={tariff.wiFi === "rent"}
                onChange={handleWifiCheck}
              />
              <span className={classes.input__box}></span>
              Аренда 99 ₽/мес.
            </label>

            <label className={classes.check}>
              <input
                className={classes.wifi__check}
                type="checkbox"
                name="buy"
                value="2000"
                checked={tariff.wiFi === "buy"}
                onChange={handleWifiCheck}
              />
              <span className={classes.input__box}></span>
              Выкупить 2 600 ₽
            </label>
          </div>
        </div>
        <div className={classes.section}>
          <h6 className={classes.header}>Соцсети</h6>

          <SocialMediaCheckBox />
        </div>

        <button
          onClick={() => alert(JSON.stringify(tariff))}
          className={classes.tariff__button}
        >
          <b>{tariff.monthlyPayment} ₽ </b>{" "}
          <p style={{ fontSize: "18px", marginLeft: "10px" }}>в месяц</p>
        </button>
      </div>
    </div>
  );
};

export default TariffPage;
