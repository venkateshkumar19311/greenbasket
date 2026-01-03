// src/components/OrderTrackingSection.jsx
import React, { useState } from "react";

const demoOrder = {
  orderId: "GB-102394",
  placedAt: "Today • 10:15 AM",
  expected: "Today • 12:45 PM – 1:15 PM",
  amount: "₹849",
  payment: "UPI",
  address: "Green Street, Theni – 625531",
  status: "Out for delivery",
  steps: [
    {
      key: "placed",
      label: "Order Placed",
      time: "10:15 AM",
      desc: "We’ve received your order and started processing.",
    },
    {
      key: "packed",
      label: "Packed at Store",
      time: "11:00 AM",
      desc: "Items have been quality checked and packed.",
    },
    {
      key: "out-for-delivery",
      label: "Out for Delivery",
      time: "11:45 AM",
      desc: "Rider has picked up your order and is on the way.",
    },
    {
      key: "delivered",
      label: "Delivered",
      time: "—",
      desc: "Once your order is handed over, status will update here.",
    },
  ],
};

const OrderTrackingSection = () => {
  const [inputValue, setInputValue] = useState("");
  const [activeOrder, setActiveOrder] = useState(null);
  const [progressIndex, setProgressIndex] = useState(2); // 0..3

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    // For now we just show demo data but attach the entered ID
    setActiveOrder({
      ...demoOrder,
      orderId: inputValue.trim() || demoOrder.orderId,
    });

    // You can change this to simulate different stages if needed
    setProgressIndex(2); // "Out for delivery"
  };

  return (
    <section
      id="orders"
      className="relative bg-white py-14 sm:py-16 lg:py-20 border-t border-gray-100"
    >
      {/* soft background accents */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-0 h-64 w-64 rounded-full bg-emerald-50 blur-3xl"
      />
      {/* <div
        aria-hidden
        className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-lime-50 blur-3xl"
      /> */}

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* heading + pill */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-green-50 border border-green-200">
            <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-green-700">
              Order Tracking
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-2">
            Track Your GreenBasket Order
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
            Enter your <span className="font-semibold">Order ID</span> or{" "}
            <span className="font-semibold">Phone Number</span> to see live
            status, expected delivery time and rider updates.
          </p>
        </div>

        {/* main card */}
        <div className="bg-gray-50 rounded-3xl border border-gray-200 p-4 sm:p-6 lg:p-7 shadow-sm">
          {/* form */}
          <form
            className="flex flex-col sm:flex-row gap-3 mb-4 sm:mb-5"
            onSubmit={handleSubmit}
          >
            <div className="flex-1">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Enter Order ID (e.g. GB-102394) or Phone Number"
                className="w-full px-3 py-2.5 rounded-xl bg-white border border-gray-300 text-sm focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500"
              />
              <p className="mt-1 text-[11px] sm:text-xs text-gray-400">
                Demo mode: type any value and click <b>Track Order</b> to see a
                sample tracking view.
              </p>
            </div>
            <button
              type="submit"
              className="px-4 py-2.5 rounded-xl bg-emerald-600 text-white text-sm font-semibold hover:bg-emerald-700 transition shadow-sm hover:shadow-md"
            >
              Track Order
            </button>
          </form>

          {/* if no order selected yet */}
          {!activeOrder && (
            <div className="rounded-2xl border border-dashed border-emerald-200 bg-emerald-50/60 px-4 py-4 text-xs sm:text-sm text-gray-700 flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                <span>
                  You’ll see your order timeline here once you enter an ID or
                  phone number.
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-yellow-400" />
                <span>
                  Make sure you use the same number you used while placing the
                  order.
                </span>
              </div>
            </div>
          )}

          {/* order details + timeline */}
          {activeOrder && (
            <div className="mt-4 sm:mt-5 grid lg:grid-cols-3 gap-4 lg:gap-6 items-start">
              {/* LEFT: summary */}
              <div className="lg:col-span-1 rounded-2xl bg-white border border-gray-100 p-4 sm:p-5 shadow-sm">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <p className="text-[11px] sm:text-xs uppercase tracking-[0.2em] text-emerald-600">
                      Order Summary
                    </p>
                    <p className="text-xs sm:text-sm text-gray-500 mt-1">
                      {activeOrder.orderId}
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-3 py-1 text-[11px] font-semibold text-emerald-700">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    {activeOrder.status}
                  </span>
                </div>

                <div className="space-y-3 text-xs sm:text-sm text-gray-600">
                  <div className="flex items-start justify-between gap-3">
                    <span className="text-gray-500">Placed on</span>
                    <span className="font-medium text-gray-800">
                      {activeOrder.placedAt}
                    </span>
                  </div>
                  <div className="flex items-start justify-between gap-3">
                    <span className="text-gray-500">Delivery window</span>
                    <span className="font-medium text-emerald-700">
                      {activeOrder.expected}
                    </span>
                  </div>
                  <div className="flex items-start justify-between gap-3">
                    <span className="text-gray-500">Delivering to</span>
                    <span className="text-right font-medium text-gray-800">
                      {activeOrder.address}
                    </span>
                  </div>
                  <div className="flex items-start justify-between gap-3 pt-2 border-t border-dashed border-gray-200">
                    <span className="text-gray-500">Bill amount</span>
                    <span className="font-extrabold text-gray-900">
                      {activeOrder.amount}
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-gray-500">Payment mode</span>
                    <span className="text-xs sm:text-sm font-semibold text-gray-800">
                      {activeOrder.payment}
                    </span>
                  </div>
                </div>

                <button className="mt-4 w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gray-900 text-white text-xs sm:text-sm font-semibold px-4 py-2.5 hover:bg-black transition">
                  View invoice / order details
                </button>
              </div>

              {/* RIGHT: timeline + help */}
              <div className="lg:col-span-2 space-y-4">
                {/* progress strip */}
                <div className="rounded-2xl bg-white border border-gray-100 p-3 sm:p-4 shadow-sm">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs sm:text-sm font-semibold text-gray-900">
                      Delivery progress
                    </span>
                    <span className="text-[11px] sm:text-xs text-gray-500">
                      Step {progressIndex + 1} of{" "}
                      {activeOrder.steps.length}
                    </span>
                  </div>

                  <div className="flex items-center justify-between gap-2">
                    {activeOrder.steps.map((step, index) => {
                      const isCompleted = index < progressIndex;
                      const isCurrent = index === progressIndex;
                      return (
                        <div
                          key={step.key}
                          className="flex-1 flex flex-col items-center text-center"
                        >
                          <div className="relative flex items-center justify-center w-full">
                            {index > 0 && (
                              <div className="absolute left-0 right-0 h-[2px] bg-gray-200 -z-10" />
                            )}
                            {index > 0 && (
                              <div
                                className="absolute left-0 h-[2px] bg-emerald-500 -z-10 transition-all duration-300"
                                style={{
                                  width:
                                    index <= progressIndex ? "100%" : "0%",
                                }}
                              />
                            )}

                            <div
                              className={`flex items-center justify-center h-7 w-7 sm:h-8 sm:w-8 rounded-full border-2 text-[11px] sm:text-xs font-semibold
                              ${
                                isCompleted || isCurrent
                                  ? "border-emerald-500 bg-emerald-50 text-emerald-700"
                                  : "border-gray-300 bg-white text-gray-400"
                              }`}
                            >
                              {index + 1}
                            </div>
                          </div>
                          <p className="mt-2 text-[10px] sm:text-[11px] text-gray-600">
                            {step.label}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* detailed list */}
                <div className="rounded-2xl bg-white border border-gray-100 p-3 sm:p-4 shadow-sm">
                  <ul className="space-y-3">
                    {activeOrder.steps.map((step, index) => {
                      const isCompleted = index < progressIndex;
                      const isCurrent = index === progressIndex;

                      return (
                        <li
                          key={step.key}
                          className="flex items-start gap-3 text-xs sm:text-sm"
                        >
                          <div className="flex flex-col items-center">
                            <span
                              className={`mt-1 h-2.5 w-2.5 rounded-full
                              ${
                                isCompleted || isCurrent
                                  ? "bg-emerald-500"
                                  : "bg-gray-300"
                              }`}
                            />
                            {index < activeOrder.steps.length - 1 && (
                              <span
                                className={`mt-1 w-px flex-1 ${
                                  isCompleted
                                    ? "bg-emerald-200"
                                    : "bg-gray-200"
                                }`}
                              />
                            )}
                          </div>
                          <div>
                            <p
                              className={`font-semibold ${
                                isCurrent
                                  ? "text-emerald-700"
                                  : "text-gray-900"
                              }`}
                            >
                              {step.label}
                            </p>
                            <p className="text-[11px] text-gray-400">
                              {step.time}
                            </p>
                            <p className="text-xs sm:text-sm text-gray-600">
                              {step.desc}
                            </p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                {/* help / support */}
                <div className="rounded-2xl bg-gray-900 text-gray-100 p-3.5 sm:p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 shadow-[0_16px_40px_rgba(15,23,42,0.55)]">
                  <div className="flex items-start gap-2">
                    <span className="mt-1 text-lg">🛵</span>
                    <div>
                      <p className="text-xs sm:text-sm font-semibold text-white">
                        Need help with this order?
                      </p>
                      <p className="text-[11px] sm:text-xs text-gray-300">
                        If your order is delayed or item is missing, you can
                        raise a ticket or contact support directly.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <a
                      href="#help"
                      className="inline-flex items-center justify-center px-3.5 py-2 rounded-xl bg-emerald-500 text-gray-900 text-[11px] sm:text-xs font-semibold hover:bg-emerald-400 transition"
                    >
                      Open Help Center
                    </a>
                    <a
                      href="#contact"
                      className="inline-flex items-center justify-center px-3.5 py-2 rounded-xl border border-gray-600 text-[11px] sm:text-xs font-semibold text-gray-100 hover:border-emerald-400 hover:text-emerald-200 transition"
                    >
                      Contact support
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default OrderTrackingSection;
