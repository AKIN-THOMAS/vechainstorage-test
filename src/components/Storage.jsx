import React from "react";
import Connex from "@vechain/connex";

const StorageComp = () => {
  const connex = new Connex({
    node: "https://vethor-node-test.vechaindev.com",
    network: "test",
  });

  const Login = async () => {
    const message = {
      purpose: "identification",
      payload: {
        type: "text",
        content: "Sign this a certificate to prove your identity",
      },
    };

    const certResponse = await connex.vendor.sign("cert", message).request();

    if (certResponse) {
      const userAdress = certResponse.signer;
      console.log(userAdress);
    } else {
      alert("Wallet not found");
    }
  };

  return (
    <div>
      <p className="top-header">Vechain Storage</p>
      <div className="loginBtn">
        <button onClick={Login}>Login</button>
      </div>
    </div>
  );
};

export default StorageComp;
