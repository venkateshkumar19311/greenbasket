import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const tabs = [
  { key: "dashboard", label: "Dashboard" },
  { key: "orders", label: "My Orders" },
  { key: "wishlist", label: "Wishlist" },
  { key: "address", label: "Address Book" },
  { key: "settings", label: "Account Settings" },
];

export default function MyAccount() {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <section className="bg-gray-50 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-6">
          My Account
        </h1>

        <div className="grid lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <aside className="bg-white rounded-2xl border border-gray-100 shadow-sm">
            <div className="p-5 border-b">
              <p className="text-sm text-gray-500">Welcome back 👋</p>
              <h3 className="font-semibold text-gray-900">
                Venkatesh Kumar
              </h3>
              <p className="text-xs text-gray-500">
                user@greenbasket.com
              </p>
            </div>

            <nav className="p-3 space-y-1">
              {tabs.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`w-full flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-medium transition ${
                    activeTab === tab.key
                      ? "bg-green-50 text-green-700"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  {tab.label}
                  {activeTab === tab.key && (
                    <span className="h-2 w-2 rounded-full bg-green-600" />
                  )}
                </button>
              ))}

              <button className="w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium text-red-600 hover:bg-red-50 transition">
                Logout
              </button>
            </nav>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-3 bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
              >
                {activeTab === "dashboard" && <Dashboard />}
                {activeTab === "orders" && <Orders />}
                {activeTab === "wishlist" && <Wishlist />}
                {activeTab === "address" && <Address />}
                {activeTab === "settings" && <Settings />}
              </motion.div>
            </AnimatePresence>
          </main>
        </div>
      </div>
    </section>
  );
}

/* ================= SECTIONS ================= */

function Dashboard() {
  return (
    <>
      <h2 className="text-xl font-semibold mb-4">Account Overview</h2>

      <div className="grid sm:grid-cols-3 gap-4 mb-6">
        <StatCard title="Orders" value="3" />
        <StatCard title="Wishlist" value="2" />
        <StatCard title="Saved Addresses" value="1" />
      </div>

      <div className="rounded-xl bg-gradient-to-r from-green-50 to-emerald-50 p-5 border">
        <p className="text-sm text-gray-700">
          You have active deals waiting. Continue shopping and save more!
        </p>
        <a
          href="#shop"
          className="inline-block mt-3 bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-4 py-2 rounded-lg"
        >
          Go to Shop
        </a>
      </div>
    </>
  );
}

function Orders() {
  return (
    <>
      <h2 className="text-xl font-semibold mb-4">My Orders</h2>

      <div className="space-y-4">
        <OrderCard
          id="GB-102394"
          item="Weekly Veg Basket"
          date="Nov 12, 2024"
          price="₹399"
          status="Delivered"
        />
        <OrderCard
          id="GB-102512"
          item="Fruit Mix Box"
          date="Dec 03, 2024"
          price="₹349"
          status="On the way"
        />
      </div>
    </>
  );
}

function Wishlist() {
  return (
    <>
      <h2 className="text-xl font-semibold mb-4">Wishlist</h2>
      <p className="text-sm text-gray-500">
        Save items you love and buy them later ❤️
      </p>
    </>
  );
}

function Address() {
  return (
    <>
      <h2 className="text-xl font-semibold mb-4">Address Book</h2>

      <div className="border rounded-xl p-4 bg-gray-50">
        <p className="font-medium text-gray-900">Home</p>
        <p className="text-sm text-gray-600">
          GreenBasket HQ, Main Street, Your City
        </p>
      </div>
    </>
  );
}

function Settings() {
  return (
    <>
      <h2 className="text-xl font-semibold mb-4">Account Settings</h2>

      <form className="space-y-4 max-w-md">
        <Input label="Full Name" defaultValue="Venkatesh Kumar" />
        <Input label="Email" defaultValue="user@greenbasket.com" />
        <Input label="Phone" defaultValue="+91 90000 00000" />

        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 text-white font-semibold px-5 py-2.5 rounded-lg"
        >
          Save Changes
        </button>
      </form>
    </>
  );
}

/* ================= REUSABLE ================= */

function StatCard({ title, value }) {
  return (
    <div className="rounded-xl border bg-white p-4 text-center hover:shadow-md transition">
      <p className="text-xs text-gray-500">{title}</p>
      <p className="text-2xl font-extrabold text-gray-900">{value}</p>
    </div>
  );
}

function OrderCard({ id, item, date, price, status }) {
  return (
    <div className="border rounded-xl p-4 hover:shadow-md transition bg-white">
      <div className="flex justify-between mb-1">
        <span className="text-sm text-gray-500">Order ID: {id}</span>
        <span
          className={`text-sm font-semibold ${
            status === "Delivered"
              ? "text-green-600"
              : "text-orange-500"
          }`}
        >
          {status}
        </span>
      </div>

      <p className="font-medium text-gray-900">{item}</p>
      <p className="text-sm text-gray-500">{date}</p>

      <div className="flex justify-between mt-3">
        <span className="font-bold">{price}</span>
        <button className="text-sm text-green-600 hover:underline">
          View Details
        </button>
      </div>
    </div>
  );
}

function Input({ label, defaultValue }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <input
        defaultValue={defaultValue}
        className="w-full px-3 py-2 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-1 focus:ring-green-500"
      />
    </div>
  );
}


