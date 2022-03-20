let numberOfPizzas = parseInt($(".output").text());

$().ready(function () {
  console.log("page loaded!");

  validateForm();
  
  addPizzaAmount();
});

// form validate
const validateForm = () => {
  $(".pizza-form").submit(function (submit) {
    submit.preventDefault();
    const size = $("input[name=size]:checked").val();
    const topps = $("input[name=topps]:checked").val();
    const crust = $(".crust").val();

    let order = new Pizza(size, topps, crust, numberOfPizzas);
    console.log(order.getPizzaDetails());
    // $(".feedback-text").text(order.getPizzaDetails());

    // add checkout show code
    // return this.reset();
  });
};

// pizza constructor object
class Pizza {
  constructor(sizeOfPizza, toppings, pizzaCrust, orders, grandTotal) {
    this.sizeOfPizza = sizeOfPizza;
    this.toppings = toppings;
    this.pizzaCrust = pizzaCrust;
    this.orders = orders;
    this.grandTotal = grandTotal;
  }
  getPizzaDetails() {
    return `You ordered ${this.orders} pizza(s) of size: ${this.sizeOfPizza}, toppings : ${this.toppings} & pizza crust: ${this.pizzaCrust}`;
  }

  // try calculate the total
  // try use a prototype for
}

let addPizzaAmount = () => {
  $(".add-pizza").click(function () {
    // handle edge-cases
    if (numberOfPizzas === 10)
      return alert("cannot place order for more than 10 pizzas at a go");
    $(".output").text(++numberOfPizzas);
  });

  $(".deduct-pizza").click(function () {
    if (numberOfPizzas === 1) return alert("number of pizzas must be 1");
    $(".output").text(--numberOfPizzas);
  });
};
