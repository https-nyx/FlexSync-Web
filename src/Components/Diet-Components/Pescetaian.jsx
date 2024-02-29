import DietStyle from "../../Styles/diet.module.css";
import pescetarianone from "../../assets/images/pescetarianone.jpg";
import pescetariantwo from "../../assets/images/pescetariantwo.jpg";
import pescetarianthree from "../../assets/images/pescetarianthree.jpg";
import pescetarianfour from "../../assets/images/pescetarianfour.jpg";
import pescetarianfive from "../../assets/images/pescetarianfive.jpg";

const Pescetarian = () => {
  return (
    <>
      <div className={DietStyle["dietDescContainer"]}>
        <div className={DietStyle["dietCard"]}>
          <img src={pescetarianone} />

          <h1 className={DietStyle["dietTemplate"]}>
            {" "}
            Smoked Salmon and Avocado Toast
          </h1>

          <h2 className={DietStyle["dietTemplate"]}>
            Begin your day with a luxurious breakfast featuring smoked salmon
            and creamy avocado on whole-grain toast. This powerhouse combo not
            only provides essential omega-3s but also keeps you fueled and
            satisfied until your next meal.
          </h2>
        </div>
        <br />
        <div className={DietStyle["dietCard"]}>
          <img src={pescetariantwo} />
          <h1 className={DietStyle["dietTemplate"]}>
            Grilled Shrimp and Quinoa Salad
          </h1>

          <h2 className={DietStyle["dietTemplate"]}>
            For lunch, relish a light yet protein-packed grilled shrimp and
            quinoa salad. Bursting with colorful vegetables, this dish is
            drizzled with a citrus vinaigrette to add a refreshing touch to your
            midday feast.
          </h2>
          <br />
        </div>
        <div className={DietStyle["dietCard"]}>
          <img src={pescetarianthree} />

          <h1 className={DietStyle["dietTemplate"]}>
            Miso-Glazed Cod with Roasted Vegetables
          </h1>

          <h2 className={DietStyle["dietTemplate"]}>
            Indulge in a savory dinner featuring miso-glazed cod served
            alongside a medley of roasted vegetables. This dish not only
            satisfies your taste buds but also ensures a rich source of quality
            protein and essential nutrients.
          </h2>
          <br />
        </div>

        <div className={DietStyle["dietCard"]}>
          <img src={pescetarianfour} />

          <h1 className={DietStyle["dietTemplate"]}>
            Lemon Garlic Butter Scallops with Asparagus
          </h1>

          <h2 className={DietStyle["dietTemplate"]}>
            For a delightful dinner option, savor succulent lemon garlic butter
            scallops paired with tender asparagus spears. This dish is not only
            rich in flavor but also provides a healthy dose of omega-3 fatty
            acids.
          </h2>
          <br />
        </div>
        <div className={DietStyle["dietCard"]}>
          <img src={pescetarianfive} />

          <h1 className={DietStyle["dietTemplate"]}>
            Cilantro-Lime Grilled Fish Tacos
          </h1>

          <h2 className={DietStyle["dietTemplate"]}>
            Wrap up your pescetarian day with a burst of flavor in cilantro-lime
            grilled fish tacos. Use whole-grain tortillas, add a cabbage slaw,
            and top it off with a zesty yogurt-based sauce for a satisfying and
            festive dinner option.
          </h2>
          <br />
        </div>
      </div>
    </>
  );
};

export default Pescetarian;
