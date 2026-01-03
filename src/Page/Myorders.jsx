import React from "react";

const orders = [
  {
    id: "GB-102394",
    date: "Nov 12, 2024",
    status: "Delivered",
    items: "Weekly Veg Basket",
    amount: 399,
  },
  {
    id: "GB-102512",
    date: "Dec 03, 2024",
    status: "On the way",
    items: "Fruit Mix Box",
    amount: 349,
  },
  {
    id: "GB-102689",
    date: "Dec 10, 2024",
    status: "Cancelled",
    items: "Breakfast Essentials Pack",
    amount: 299,
  },
];

export default function MyOrders() {
  return (
    <section className="bg-gray-50 min-h-screen py-10">
      <div className="max-w-6xl mx-auto px-4">
        {/* Page Header */}
        <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-6">
          My Orders
        </h1>

        {/* Orders List */}
        <div className="space-y-4">
          {orders.map((order) => (
            <div
              key={order.id}
              className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm hover:shadow-md transition"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div>
                  <p className="text-sm text-gray-500">
                    Order ID: <span className="font-medium">{order.id}</span>
                  </p>
                  <p className="font-semibold text-gray-900 mt-1">
                    {order.items}
                  </p>
                  <p className="text-sm text-gray-500">
                    Ordered on {order.date}
                  </p>
                </div>

                <div className="flex items-center gap-6">
                  <span
                    className={`text-sm font-semibold ${
                      order.status === "Delivered"
                        ? "text-green-600"
                        : order.status === "On the way"
                        ? "text-orange-500"
                        : "text-red-500"
                    }`}
                  >
                    {order.status}
                  </span>

                  <span className="font-bold text-gray-900">
                    ₹{order.amount}
                  </span>

                  <button className="text-sm text-green-600 hover:underline font-medium">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}

          {/* Empty State (future ready) */}
          {orders.length === 0 && (
            <div className="text-center text-gray-500 mt-16">
              You have not placed any orders yet.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}


