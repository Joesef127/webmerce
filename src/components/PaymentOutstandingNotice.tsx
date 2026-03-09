import React from "react";

const PaymentOutstandingNotice: React.FC = () => (
  <div style={{
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: "#fff",
    color: "#222",
    textAlign: "center",
    fontFamily: "Inter, Arial, sans-serif",
    backgroundImage: "radial-gradient(circle at top right, #f3f3f3 0%, #fff 70%)"
  }}>
    <h1 style={{ fontWeight: 600, fontSize: "2.1rem", marginBottom: "1.2rem", letterSpacing: "-0.5px" }}>
      Should have paid your<br />website developer
    </h1>
    <p style={{ fontSize: "1.13rem", color: "#666", marginBottom: "1.7rem", lineHeight: 1.5 }}>
      Services were delivered. Payment for<br />
      <b>Webmerce Analytics</b> remains outstanding.
    </p>
    <p style={{ fontSize: "1.01rem", color: "#bbb" }}>
      If you need access, pay me.
    </p>
  </div>
);

export default PaymentOutstandingNotice;
