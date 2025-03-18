import React, { JSX, useState } from "react";
import { Mail, ShoppingBag, Users, Check } from "lucide-react";

// Interfejsy TypeScript
interface PurchaseOption {
  id: number;
  quantity: number;
  regularPrice: number;
  discountedPrice: number;
  savePercentage: number;
  isPopular?: boolean;
}

interface DiscountInfo {
  type: string;
  value: number;
  code?: string;
}

// Dane opcji zakupu
const purchaseOptions: PurchaseOption[] = [
  {
    id: 1,
    quantity: 1,
    regularPrice: 79.99,
    discountedPrice: 79.99,
    savePercentage: 0
  },
  {
    id: 2,
    quantity: 2,
    regularPrice: 159.98,
    discountedPrice: 139.99,
    savePercentage: 12,
    isPopular: true
  },
  {
    id: 3,
    quantity: 3,
    regularPrice: 239.97,
    discountedPrice: 199.99,
    savePercentage: 17
  }
];

// Dane zniżek
const discounts: DiscountInfo[] = [
  { type: "first-purchase", value: 15, code: "PIERWSZY" },
  { type: "newsletter", value: 5, code: "NEWSLETTER" }
];

const ProductPurchase: React.FC = (): JSX.Element => {
  const [selectedOption, setSelectedOption] = useState<number>(2); // Domyślnie wybrana popularna opcja
  const [showNewsletter, setShowNewsletter] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");

  const handleOptionSelect = (optionId: number) => {
    setSelectedOption(optionId);
  };

  const handleNewsletterToggle = () => {
    setShowNewsletter(!showNewsletter);
  };

  return (
    <div className="product-purchase-container">
      {/* Lewa strona - opcje zakupu */}
      <div className="purchase-options">
        <h2 className="product-title">HANDYcream</h2>
        <p className="product-subtitle">Intensywnie regenerujący krem do rąk</p>
        
        {/* Opcje zakupu */}
        <div className="pricing-options">
          <h3>Wybierz opcję:</h3>
          
          {purchaseOptions.map((option) => (
            <div 
              key={option.id} 
              className={`pricing-option ${selectedOption === option.id ? 'selected' : ''} ${option.isPopular ? 'popular' : ''}`}
              onClick={() => handleOptionSelect(option.id)}
            >
              <div className="option-header">
                <div className="quantity">
                  {option.quantity === 1 ? (
                    <span>Pojedynczy produkt</span>
                  ) : (
                    <div className="group-buy">
                      <Users size={16} />
                      <span>Zakup grupowy ({option.quantity} szt.)</span>
                    </div>
                  )}
                  {option.isPopular && <div className="popular-badge">Najczęściej wybierane</div>}
                </div>
              </div>
              
              <div className="price-details">
                <div className="price-container">
                  <span className="discounted-price">{option.discountedPrice.toFixed(2)} zł</span>
                  {option.savePercentage > 0 && (
                    <span className="regular-price">{option.regularPrice.toFixed(2)} zł</span>
                  )}
                </div>
                
                {option.savePercentage > 0 && (
                  <div className="savings">
                    <span>Oszczędzasz {option.savePercentage}%</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        
        {/* Dodatkowe zniżki */}
        <div className="additional-discounts">
          <div className="discount-item">
            <Check size={16} />
            <span>
              <strong>{discounts[0].value}% rabatu</strong> na pierwszy zakup z kodem <strong>{discounts[0].code}</strong>
            </span>
          </div>
          
          <div className="discount-item">
            <Check size={16} />
            <span>
              <strong>+{discounts[1].value}% rabatu</strong> za zapis do newslettera
            </span>
            <button 
              className="newsletter-toggle"
              onClick={handleNewsletterToggle}
            >
              {showNewsletter ? "Ukryj" : "Zapisz się"}
            </button>
          </div>
          
          {showNewsletter && (
            <div className="newsletter-form">
              <Mail size={16} />
              <input 
                type="email" 
                placeholder="Twój adres e-mail" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button>Zapisz się</button>
            </div>
          )}
        </div>
        
        {/* Przycisk zakupu */}
        <button className="buy-button">
          <ShoppingBag size={20} />
          <span>Dodaj do koszyka</span>
        </button>
      </div>
      
      {/* Prawa strona - zdjęcie produktu */}
      <div className="product-image">
        <img src="/sales-cream.png" alt="HANDYcream - Intensywnie regenerujący krem do rąk" />
      </div>
    </div>
  );
};

export default ProductPurchase;
