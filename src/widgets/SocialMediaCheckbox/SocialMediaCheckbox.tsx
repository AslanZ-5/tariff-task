import classes from "./SocialMediaCheckbox.module.scss";
import { useAppSelector, useAppDispatch } from "../../hooks";
import { setTariff } from "../../features/tariff/tariffSlice";
import { removeItem } from "../../tools";

const SocialMediaCheckBox = () => {
  const tariff = useAppSelector((state) => state.tariff);
  const dispatch = useAppDispatch();
  const checkboxHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    let socialMedia = [...tariff.socialMedia];
    if (e.target.checked) {
      socialMedia.push(Number(e.target.value));
      dispatch(
        setTariff({
          name: "socialMedia",
          value: socialMedia,
        })
      );
    } else {
      socialMedia = removeItem(socialMedia, Number(e.target.value));
      dispatch(
        setTariff({
          name: "socialMedia",
          value: socialMedia,
        })
      );
    }
  };
  return (
    <div className={classes.checkbox__container}>
      <label className={classes.check}>
        <input
          onChange={checkboxHandler}
          className={`${classes.check_input} `}
          type="checkbox"
          name="facebook"
          value="20"
        />
        <span className={`${classes.fb__box} ${classes.box}`}></span>
        <p className={classes.price}>20 ₽</p>
      </label>
      <label className={classes.check}>
        <input
          onChange={checkboxHandler}
          className={`${classes.check_input}`}
          type="checkbox"
          name="vk"
          value="20"
        />
        <span className={`${classes.vk__box} ${classes.box}`}></span>
        <p className={classes.price}>20 ₽</p>
      </label>
      <label className={classes.check}>
        <input
          onChange={checkboxHandler}
          className={`${classes.check_input}`}
          type="checkbox"
          name="ok"
          value="20"
        />
        <span className={`${classes.ok__box} ${classes.box}`}></span>
        <p className={classes.price}>20 ₽</p>
      </label>
      <label className={classes.check}>
        <input
          onChange={checkboxHandler}
          className={`${classes.check_input}`}
          type="checkbox"
          name="instagram"
          value="60"
        />
        <span className={`${classes.instagram__box} ${classes.box}`}></span>
        <p className={classes.price}>60 ₽</p>
      </label>
      <label className={classes.check}>
        <input
          onChange={checkboxHandler}
          className={`${classes.check_input}`}
          type="checkbox"
          name="tiktok"
          value="60"
        />
        <span className={`${classes.tiktok__box} ${classes.box}`}></span>
        <p className={classes.price}>60 ₽</p>
      </label>
    </div>
  );
};

export default SocialMediaCheckBox;
