import DietStyle from "../../Styles/diet.module.css";
import Medimg from "../../assets/images/mediterraneanone.jpg";
import Medimgtwo from "../../assets/images/mediterraneantwo.jpg";
import Medimgthree from "../../assets/images/mediterraneanthree.jpg";

const Mediterranean = () => {
  return (
    <>
      <div className={DietStyle["dietDescContainer"]}>
        <div className={DietStyle["dietCard"]}>
          <img src={Medimg} />

          <h1 className={DietStyle["dietTemplate"]}>
            Greek Yogurt Parfait with Fresh Fruits and Nuts
          </h1>

          <h2 className={DietStyle["dietTemplate"]}>
            Start your day with a wholesome Greek yogurt parfait featuring a
            medley of fresh fruits like berries, and a sprinkle of nuts. This
            nutrient-rich breakfast provides a perfect balance of protein,
            fiber, and antioxidants.
          </h2>
        </div>
        <br />
        <div className={DietStyle["dietCard"]}>
          <img src={Medimgtwo} />

          <h1 className={DietStyle["dietTemplate"]}>
            Mediterranean Chickpea Salad
          </h1>

          <h2 className={DietStyle["dietTemplate"]}>
            For a refreshing lunch, indulge in a Mediterranean chickpea salad
            loaded with cherry tomatoes, cucumbers, olives, feta cheese, and a
            drizzle of olive oil. This vibrant salad is not only delicious but
            also a great source of plant-based protein and essential nutrients.
          </h2>
        </div>
        <br />
        <div className={DietStyle["dietCard"]}>
          <img src={Medimgthree} />

          <h1 className={DietStyle["dietTemplate"]}>
            Grilled Mediterranean Veggie Wrap
          </h1>

          <h2 className={DietStyle["dietTemplate"]}>
            {" "}
            Enjoy a light yet satisfying dinner with a grilled Mediterranean
            veggie wrap. Packed with grilled zucchini, eggplant, peppers, and
            hummus, wrapped in a whole-grain flatbread, this dish is a
            delightful fusion of flavors.
          </h2>
        </div>
        <br />
        <div className={DietStyle["dietCard"]}>
          <p> IMAGE HERE</p>

          <h1 className={DietStyle["dietTemplate"]}>
            Lemon Garlic Herb Salmon
          </h1>

          <h2 className={DietStyle["dietTemplate"]}>
            Elevate your dinner experience with a succulent lemon garlic herb
            salmon. Rich in omega-3 fatty acids, this grilled or baked salmon
            dish is paired with a side of roasted vegetables for a wholesome and
            satisfying meal.
          </h2>
        </div>
        <br />
        <div className={DietStyle["dietCard"]}>
          <p> IMAGE HERE</p>

          <h1 className={DietStyle["dietTemplate"]}>
            Mediterranean Quinoa Stuffed Bell Peppers
          </h1>

          <h2 className={DietStyle["dietTemplate"]}>
            {" "}
            End your day with Mediterranean-inspired quinoa stuffed bell
            peppers. Filled with a mixture of quinoa, tomatoes, black olives,
            and feta cheese, these peppers are baked to perfection, offering a
            delightful combination of taste and nutrition.
          </h2>
        </div>
        <br />
      </div>
    </>
  );
};

export default Mediterranean;
