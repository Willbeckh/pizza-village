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
    const size = parseInt($("input[name=size]:checked").val());
    const topps = parseInt($("input[name=topps]:checked").val());
    const crust = parseInt($(".form-select option:selected").val());
    let totalCost = numberOfPizzas * (size + topps + crust);

    //for getting text content only.
    const sizeChoice = $("input[name=size]:checked + label").text();
    const crustChoice = $(".crust option:selected").text();
    const toppingsChoice = $("input[name=topps]:checked + label").text();

    // creates new pizza object
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

    $(".checkout-order").css("display", "block");
    return this.reset();
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
    $(".checkout-order").click(function () {
      alertAction();
      $(".deliver-option").show(function () {
        $(".location-input").css("display", "block");
        $(".btn.yes").click(() => {
          let location = $(".location-input").val();
          $(".deliver-text").text(
            `Order to be delivered to "${location}" in a few minutes.`
          );
          return userFeedback();
        });
        $(".btn.no").click(() => {
          $(".deliver-option").css("display", "none");
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
    $(".output").text((numberOfPizzas += 1));
  });
  $(".subtract").click(function () {
    if (numberOfPizzas === 1) return alert("number of pizzas must be 1");
    $(".output").text(--numberOfPizzas);
  });
};

// toggle page
$(".order-now").click(function () {
  $(".landing-page").css("display", "none");
  $(".order-page").css("display", "block");
});

$(".go-back-btn").click(function () {
  $(".order-page").css("display", "none");
  $(".landing-page").css("display", "block");
});

//  messages modals logic
let alertAction = () => {
  $(".order-alert-box").slideDown();
  setTimeout(() => {
    $(".order-alert-box").slideUp();
  }, 2000);
};

// deliver message
let userFeedback = () => {
  $(".deliver-alert-box").slideDown();
  setTimeout(() => {
    $(".deliver-alert-box").slideUp();
  }, 3000);
};
