$().ready(function () {
  console.log("page loaded!");

  validateForm();
});

// form validate
const validateForm = () => {
  $(".pizza-form").submit(function (submit) {
    submit.preventDefault();
    const size = $("input[name=size]:checked").val();
    const topps = $("input[name=topps]:checked").val();
    const crust = $(".crust").val();

    // validateError();
    let order = new Pizza(size, topps, crust);
    console.log(order.getPizzaDetails());
    return this.reset();
  });
};

// pizza constructor
class Pizza {
  constructor(size, toppings, crust) {
    this.size = size;
    this.toppings = toppings;
    this.crust = crust;
  }
  getPizzaDetails() {
    return `pizza size: ${this.size}, toppings : ${this.toppings} & crust choice ${this.crust}`;
  }
  calculateCost() {
    let pepperoni = 100;
    let roast = 50;
    let olives = 80;
  }
}

const validateError = () => {
  alert("need to fill pizza details");
};
