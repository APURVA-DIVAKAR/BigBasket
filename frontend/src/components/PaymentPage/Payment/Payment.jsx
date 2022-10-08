import React from "react";
import styles from "./Payment.module.css";
import Voucher from "./VoucherComponent/Voucher";
import { Button, useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router";
const Payment = () => {
  const [details, setDetails] = React.useState({});
  const toast = useToast();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Payment Successfull.",
      description: "Payment Done Successfully",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
    

    navigate("/");
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.leftSideDiv}>
        <div className={styles.giftOrder}>
          <h4>Is this a gift Order?</h4>
          <button>ADD MESSAGE</button>
        </div>
        <div className={styles.deliveryOptions}>
          <h4>Delivery Options</h4>
          <button>Change</button>
        </div>
        <div className={styles.paymentOptions}>
          <h4>Payment Options</h4>
        </div>
        <div>
          <div></div>
          <div className={styles.optionsAndCard}>
            <div className={styles.paymentOptions}>
              <div className={styles.options}>
                <p>Credit / Debit Card</p>
              </div>
              <div className={styles.options}>
                <p>Netbanking</p>
              </div>
              <div className={styles.options}>
                <p>UPI</p>
              </div>
              <div className={styles.options}>
                <p>Wallet</p>
              </div>
              <div className={styles.options}>
                <p>Pay Later</p>
              </div>
              <div className={styles.Lastoptions}>
                <p>Cash/Card on Delivery</p>
              </div>
            </div>
            <div className={styles.cardDiv}>
              <form onSubmit={(e) => handleSubmit(e)}>
                <h3 className={styles.boldTexts}>Add Credit/ Debit Card</h3>
                <div>
                  <p className={styles.smallText}>Card Number</p>
                  <input
                    type="text"
                    className={styles.cardNumber}
                    maxLength="11"
                    required
                    onChange={(e) => {
                      setDetails({ ...details, cardNumber: e.target.value });
                    }}
                    pattern="\d*"
                  />
                </div>
                <div className={styles.validCvv}>
                  <div>
                    <p className={styles.smallText}>Valid Thru</p>
                    <input
                      type="text"
                      className={styles.cardNumber}
                      maxLength="4"
                      required
                      inputMode="numeric"
                      onChange={(e) => {
                        setDetails({ ...details, cardNumber: e.target.value });
                      }}
                      pattern="\d*"
                    />
                  </div>

                  <div>
                    <p className={styles.smallText}>CVV</p>
                    <input
                      type="text"
                      className={styles.cardNumber}
                      maxLength="3"
                      required
                      onChange={(e) => {
                        setDetails({ ...details, cardNumber: e.target.value });
                      }}
                      pattern="\d*"
                    />
                  </div>
                </div>
                <button className={styles.placeOrderButton} type="submit">
                  Place Order & Pay
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Voucher />
    </div>
  );
};

export default Payment;
