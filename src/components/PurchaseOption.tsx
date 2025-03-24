import React, { useState } from "react";
import { Mail, ShoppingBag, Users, Check } from "lucide-react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const purchaseOptions = [
  { id: 1, quantity: 1, regularPrice: 79.99, discountedPrice: 79.99, savePercentage: 0 },
  { id: 2, quantity: 2, regularPrice: 159.98, discountedPrice: 139.99, savePercentage: 12, isPopular: true },
  { id: 3, quantity: 3, regularPrice: 239.97, discountedPrice: 199.99, savePercentage: 17 }
];

const discounts = [
  { type: "first-purchase", value: 15, code: "PIERWSZY" },
  { type: "newsletter", value: 5, code: "NEWSLETTER" }
];

const ProductPurchase = () => {
  const [selectedOption, setSelectedOption] = useState(2);
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = () => {
    if (email) {
      toast.success("Zostałeś zapisany do newslettera!");
      setEmail("");
    }
  };

  return (
    <div className="product-purchase-container">
      <div className="purchase-options">
        <h2 className="product-title">HANDYcream</h2>
        <p className="product-subtitle">Intensywnie regenerujący krem do rąk</p>
        <div className="pricing-options">
          <h3>Wybierz opcję:</h3>
          {purchaseOptions.map(option => (
            <div
              key={option.id}
              className={`pricing-option ${selectedOption === option.id ? 'selected' : ''} ${option.isPopular ? 'popular' : ''}`}
              onClick={() => setSelectedOption(option.id)}
            >
              <div className="option-header">
                <div className="quantity">
                  {option.quantity === 1 ? <span>Pojedynczy produkt</span> : <div className="group-buy"><Users size={16} /><span>Zakup grupowy ({option.quantity} szt.)</span></div>}
                  {option.isPopular && <div className="popular-badge">Najczęściej wybierane</div>}
                </div>
              </div>
              <div className="price-details">
                <div className="price-container">
                  <span className="discounted-price">{option.discountedPrice.toFixed(2)} zł</span>
                  {option.savePercentage > 0 && <span className="regular-price">{option.regularPrice.toFixed(2)} zł</span>}
                </div>
                {option.savePercentage > 0 && <div className="savings"><span>Oszczędzasz {option.savePercentage}%</span></div>}
              </div>
            </div>
          ))}
        </div>
        <div className="additional-discounts">
          <div className="discount-item"><Check size={16} /><span><strong>{discounts[0].value}% rabatu</strong> na pierwszy zakup z kodem <strong>{discounts[0].code}</strong></span></div>
          <div className="discount-item">
            <Check size={16} /><span><strong>+{discounts[1].value}% rabatu</strong> za zapis do newslettera</span>
          </div>
          <div className="newsletter-form">
            <Mail size={16} />
            <input type="email" placeholder="Twój adres e-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
            <button onClick={handleNewsletterSubmit}>Zapisz się</button>
          </div>
        </div>
        <button className="buy-button"><ShoppingBag size={20} /><span>Dodaj do koszyka</span></button>
      </div>
      <div className="product-image"><img src="/sales-cream.png" alt="HANDYcream - Intensywnie regenerujący krem do rąk" /></div>
      <ToastContainer position="top-center" autoClose={3000} hideProgressBar />
    </div>
  );
};

export default ProductPurchase;
