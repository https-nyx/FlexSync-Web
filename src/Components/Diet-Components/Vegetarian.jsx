import DietStyle from "../../Styles/diet.module.css";
import vegetarianone from "../../assets/images/spinachavocado.jpg";
import vegetariantwo from "../../assets/images/vegetariantwo.jpg";
import vegetarianthree from "../../assets/images/vegetarianthree.jpg";
import vegetarianfour from "../../assets/images/vegetarianfour.jpg";
import vegetarianfive from "../../assets/images/vegetarianfive.jpg";
const Vegetarian = () => {
  return (
    <>
      <div className={DietStyle["dietDescContainer"]}>
        <div className={DietStyle["dietCard"]}>
          <img src={vegetarianone} />

          <h1 className={DietStyle["dietTemplate"]}>
            Green Goddess Breakfast Bowl
          </h1>

          <h2 className={DietStyle["dietTemplate"]}>
            Start your day with a nutrient-packed breakfast featuring a blend of
            fresh spinach, avocado, cherry tomatoes, and a sprinkle of chia
            seeds. Top it off with a drizzle of olive oil for a satisfying and
            energizing start.
          </h2>
        </div>
        <br />
        <div className={DietStyle["dietCard"]}>
          <img src={vegetariantwo} />

          <h1 className={DietStyle["dietTemplate"]}>
            Mediterranean Quinoa Salad
          </h1>

          <h2 className={DietStyle["dietTemplate"]}>
            For lunch, indulge in a Mediterranean-inspired quinoa salad loaded
            with cucumbers, olives, red bell peppers, and feta cheese. Tossed in
            a zesty lemon vinaigrette, this salad is a perfect balance of
            protein, fiber, and flavor.
          </h2>
        </div>
        <br />
        <div className={DietStyle["dietCard"]}>
          <img src={vegetarianthree} />

          <h1 className={DietStyle["dietTemplate"]}>
            Chickpea and Sweet Potato Curry
          </h1>

          <h2 className={DietStyle["dietTemplate"]}>
            Savor a hearty dinner with a delicious chickpea and sweet potato
            curry. Infused with aromatic spices and coconut milk, this curry is
            not only satisfying but also provides a good dose of plant-based
            protein and essential nutrients.
          </h2>
        </div>
        <br />
        <div className={DietStyle["dietCard"]}>
          <img src={vegetarianfour} />

          <h1 className={DietStyle["dietTemplate"]}>Mixed Berry Parfait</h1>

          <h2 className={DietStyle["dietTemplate"]}>
            Indulge your sweet tooth guilt-free with a mixed berry parfait.
            Layered with fresh berries, Greek yogurt, and a drizzle of honey,
            this dessert provides a delightful end to your day while ensuring
            you meet your daily fruit and protein requirements.
            <br />
            With the "Vibrant Veggie Delight" meal plan, you'll discover that
            vegetarian eating can be both nutritious and delicious, making it
            easy to adopt a plant-based lifestyle.
          </h2>
        </div>
        <br />
        <div className={DietStyle["dietCard"]}>
          <img src={vegetarianfive} />
          <h1 className={DietStyle["dietTemplate"]}>
            Roasted Red Pepper Hummus with Veggie Sticks
          </h1>
          <h2 className={DietStyle["dietTemplate"]}>
            Enjoy a mid-day snack with a classic combination of roasted red
            pepper hummus and an assortment of colorful veggie sticks like
            carrots, celery, and bell peppers. This snack is both satisfying and
            rich in vitamins.
          </h2>
        </div>
        <br />
      </div>
    </>
  );
};

export default Vegetarian;
