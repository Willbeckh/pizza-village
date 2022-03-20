let numberOfPizzas = parseInt($(".output").text());
let orderOutput = $(".feedback-text"); // holds output of pizza order

$().ready(function () {
  console.log("page loaded!");

  formData();
  addPizzaAmount();
});

// form object for data validation
const formData = () => {
  $(".pizza-form").submit(function (submit) {
    submit.preventDefault();
    const size = Number($("input[name=size]:checked").val());
    const topps = Number($("input[name=topps]:checked").val());
    const crust = Number($(".crust").val());
    let totalCost = numberOfPizzas * (size + topps + crust);

    //for getting text content only.
    const sizeChoice = $("input[name=size]:checked + label").text();
    const crustChoice = $(".crust option:selected").text();
    const toppingsChoice = $("input[name=topps]:checked + label").text();

    let order = new Pizza(
      sizeChoice,
      toppingsChoice,
      crustChoice,
      numberOfPizzas,
      totalCost
    );
    console.log(order.getPizzaDetails());
    orderOutput.text(order.getPizzaDetails());
    orderOutput.text(order.orderCheckout());

    $(".checkout-order").show();
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
    return `You ordered ${this.orders}, ${this.sizeOfPizza} pizza(s), toppings : ${this.toppings} & pizza crust: ${this.pizzaCrust}: total cost ${this.grandTotal}`;
  }

  // checkout order
  orderCheckout() {
    formData();
    $(".checkout-order").click(function () {
      // orderOutput.text(`Total cost is: ${totalCost}`);
      // $(".order-btn").hide();

      $(".deliver-option").show(function () {
        $(".btn.yes").click(() => {
          $(".location-input").css("display", "block");
          return alert("your order will be delivered in a few");
        });

        $(".btn.no").click(() => {
          $(".deliver-option").css("display", "none");
          return alert("Thank you!, enjoy your meal");
        });
      });
    });
  }
}

// calculate number of pizzas for order
let addPizzaAmount = () => {
  $(".add").click(function () {
    // handle edge-cases
    if (numberOfPizzas === 10)
      return alert("cannot place order for more than 10 pizzas at a go");
    $(".output").text(++numberOfPizzas);
  });
  $(".subtract").click(function () {
    if (numberOfPizzas === 1) return alert("number of pizzas must be 1");
    $(".output").text(--numberOfPizzas);
  });
};
