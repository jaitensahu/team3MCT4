function openDonateForm(dialogId) {
  document.getElementById(dialogId).showModal();
}

document.getElementById('openPay_1').addEventListener('click', function() {
  payNow('donateDialog_1');
});

document.getElementById('openPay_2').addEventListener('click', function() {
  payNow('donateDialog_2');
});

document.getElementById('openPay_3').addEventListener('click', function() {
  payNow('donateDialog_3');
});

function payNow(payId) {
  var payButton = document.getElementById(payId);
  payButton.addEventListener("click", function (event) {
    event.preventDefault();
    const amountVal = payId + "_amount";
    console.log("val amount ", amountVal);
    const amountpaid = (document.getElementById(amountVal).value) * 100;
    console.log("amountPaid", amountpaid);
    makeFirstApiRequest(amountpaid);
  });
  document.getElementById(payId).close();
}

function closeDonateForm(donateDialog) {
  document.getElementById(donateDialog).close();
}

const username = "rzp_test_pbp0v4wadM2etX";
const password = "gOLL9cUUcSrlEDUjuz9uYUMW";

function makeFirstApiRequest(amountpaid) {
  var accessToken = btoa(`${username}:${password}`);
  const url =
    "https://corsproxy.io/?" +
    encodeURIComponent("https://api.razorpay.com/v1/orders");
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Basic " + accessToken,
    },
    body: JSON.stringify({
      // Include any necessary data in the request body
      amount: amountpaid,
      currency: "INR",
      receipt: "qwsaq1",
      partial_payment: true,
      first_payment_min_amount: 230,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("data: ", data);
      // Extract the order ID from the response
      var orderId = data.order_id;

      // Use the order ID to initiate the Razorpay payment
      initiateRazorpayPayment(orderId, amountpaid);
    })
    .catch((error) => {
      console.error("Error making first API request:", error);
    });
}

function initiateRazorpayPayment(orderId, amountpaid) {
  var options = {
    key: "rzp_test_pbp0v4wadM2etX", // Enter the Key ID generated from the Dashboard
    amount: amountpaid, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    currency: "INR",
    name: "Acme Corp", //your business name
    description: name,
    image: "https://example.com/your_logo",
    order_id: orderId, //This is a sample Order ID. Pass the id obtained in the response of Step 1
    callback_url: "https://eneqd3r9zrjok.x.pipedream.net/",
    prefill: {
      //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
      name: "Gaurav Kumar", //your customer's name
      email: "gaurav.kumar@example.com",
      contact: "9000090000", //Provide the customer's phone number for better conversion rates
    },
    notes: {
      address: "Razorpay Corporate Office",
    },
    theme: {
      color: "#3399cc",
    },
  };
  var rzp1 = new Razorpay(options);
  rzp1.open();
}

document.addEventListener("DOMContentLoaded", function () {
  var form = document.querySelector("form");
  var payButton = document.getElementById("rzp-button1");
  payButton.addEventListener("click", function (event) {
    event.preventDefault();
    const amountpaid = document.getElementById("price").value * 100;
    console.log("amountPaid", amountpaid);
    // Make the first API request to get the order ID
    makeFirstApiRequest(amountpaid);
  });
});
