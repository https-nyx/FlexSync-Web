import DietStyle from "../../Styles/diet.module.css";
import highproteinone from "../../assets/images/highproteinone.jpg";
import highproteintwo from "../../assets/images/highproteintwo.jpg";
import highproteinthree from "../../assets/images/highproteinthree.jpg";
import highproteinfour from "../../assets/images/highproteinfour.jpg";
import highproteinfive from "../../assets/images/highproteinfive.jpg";
import textTemplate from "../../Styles/diet.module.css";
const HighProteinDiet = () => {
  return (
    <>
      <div className={DietStyle["dietDescContainer"]}>
        <div className={DietStyle["dietCard"]}>
          <div className={DietStyle["dietImageDiv"]}>
            <img src={highproteinone} className={DietStyle["dietImage"]} />
          </div>

          <h1 className={DietStyle["dietTemplate"]}>
            Energizing Berry Protein Smoothie
          </h1>

          <h2>
            Kickstart your day with a nutrient-packed smoothie featuring your
            choice of protein powder, mixed berries, Greek yogurt, and a splash
            of almond milk. This delicious blend not only tastes great but also
            provides a protein boost to fuel your morning.
          </h2>
        </div>
        <br />
        <div className={DietStyle["dietCard"]}>
          <div className={DietStyle["dietImageDiv"]}>
            <img src={highproteintwo} className={DietStyle["dietImage"]} />
          </div>
          <h1 className={DietStyle["dietTemplate"]}>
            Grilled Chicken Quinoa Bow
          </h1>

          <h2>
            {" "}
            For lunch, indulge in a hearty grilled chicken quinoa bowl loaded
            with colorful vegetables, avocado, and a drizzle of olive oil. This
            well-balanced meal is not only satisfying but also rich in lean
            protein, fiber, and essential nutrients.
          </h2>
        </div>
        <br />
        <div className={DietStyle["dietCard"]}>
          <div className={DietStyle["dietImageDiv"]}>
            <img src={highproteinthree} className={DietStyle["dietImage"]} />
          </div>

          <h1 className={DietStyle["dietTemplate"]}>
            Chickpea and Spinach Curry
          </h1>

          <h2>
            Enjoy a plant-based protein-packed dinner with a flavorful chickpea
            and spinach curry. Infused with aromatic spices, this dish is not
            only delicious but also a great source of vegetarian protein.
          </h2>
        </div>
        <br />

        <div className={DietStyle["dietCard"]}>
          <div className={DietStyle["dietImageDiv"]}>
            <img src={highproteinfour} className={DietStyle["dietImage"]} />
          </div>
          <h1 className={DietStyle["dietTemplate"]}>
            Protein-Packed Cottage Cheese with Pineapple
          </h1>

          <h2>
            Satisfy your mid-day cravings with a snack of protein-packed cottage
            cheese paired with fresh pineapple chunks. This combination provides
            a tasty and convenient way to boost your protein intake between
            meals.
          </h2>
        </div>
        <br />
        <div className={DietStyle["dietCard"]}>
          <div className={DietStyle["dietImageDiv"]}>
            <img src={highproteinfive} className={DietStyle["dietImage"]} />
          </div>

          <h1 className={DietStyle["dietTemplate"]}>
            Chocolate Peanut Butter Protein Balls
          </h1>

          <h2>
            End your day on a sweet note with homemade chocolate peanut butter
            protein balls. These bite-sized treats are not only delicious but
            also a convenient way to sneak in extra protein, making for a
            guilt-free dessert option.
          </h2>
        </div>
        <br />
      </div>
    </>
  );
};

export default HighProteinDiet;
