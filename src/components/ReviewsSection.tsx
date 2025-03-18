import React, { JSX } from "react";
import { Star, User } from "lucide-react";

// Definicje interfejsów z typami
interface ReviewData {
  id: number;
  user: string;
  rating: number;
  content: string;
  date: string;
  hasImage?: boolean;
  imageUrl?: string;
}

interface RatingStarsProps {
  rating: number;
}

// Przykładowe dane opinii z określonym typem ReviewData[][]
const reviews: ReviewData[][] = [
  // Pierwsza kolumna - 2 komentarze
  [
    {
      id: 1,
      user: "Anna K.",
      rating: 5,
      content: "Krem HANDYcream zupełnie odmienił moje dłonie. Po tygodniu stosowania skóra jest miękka, elastyczna i widocznie odmłodzona. Przede wszystkim doceniam szybkie wchłanianie - bez tłustego filmu na skórze!",
      date: "12.02.2025"
    },
    {
      id: 2,
      user: "Marek W.",
      rating: 4,
      content: "Jako mechanik mam naprawdę zniszczone dłonie. Ten krem naprawdę pomaga w regeneracji. Używam go wieczorem i rano widzę różnicę.",
      date: "03.03.2025"
    }
  ],
  // Druga kolumna - 3 komentarze
  [
    {
      id: 3,
      user: "Katarzyna M.",
      rating: 5,
      content: "Polecam! Używam codziennie przed snem.",
      date: "18.01.2025"
    },
    {
      id: 4,
      user: "Paweł N.",
      rating: 5,
      content: "Kupiłem dla żony, ale sam zacząłem używać. Świetnie się wchłania i nie zostawia tłustego filmu.",
      date: "27.02.2025"
    },
    {
      id: 5,
      user: "Zofia L.",
      rating: 4,
      content: "Jako pielęgniarka, moje ręce są narażone na częste mycie i dezynfekcję. Ten krem naprawdę pomaga utrzymać skórę w dobrej kondycji.",
      date: "10.03.2025"
    }
  ],
  // Trzecia kolumna - 1 dłuższy komentarz ze zdjęciem
  [
    {
      id: 6,
      user: "Monika S.",
      rating: 5,
      content: "Długo szukałam kremu, który naprawdę pomoże moim zniszczonym dłoniom. Pracuję jako florystka, więc moje ręce są stale narażone na wodę, chemikalia i mechaniczne uszkodzenia. To mój absolutny must-have!",
      date: "05.03.2025",
      hasImage: true,
      imageUrl: "/beautiful-hands.jpg"
    }
  ]
];

// Komponent gwiazdek oceny z typem React.FC<Props>
const RatingStars: React.FC<RatingStarsProps> = ({ rating }): JSX.Element => {
  return (
    <div className="rating">
      {[...Array(5)].map((_, i: number) => (
        <Star 
          key={i} 
          size={16} 
          className={i < rating ? "star-filled" : "star-empty"} 
          fill={i < rating ? "#FFD700" : "none"} 
          stroke={i < rating ? "#FFD700" : "#ccc"} 
        />
      ))}
    </div>
  );
};

// Główny komponent opinii
const ReviewsSection: React.FC = (): JSX.Element => {
  return (
    <div className="reviews-section">
      <h2 className="reviews-title">Co mówią nasi klienci o HANDYcream</h2>
      <div className="reviews-container">
        {reviews.map((column: ReviewData[], colIndex: number) => (
          <div key={colIndex} className={`review-column column-${colIndex + 1}`}>
            {column.map((review: ReviewData) => (
              <div key={review.id} className="review-card">
                <div className="review-header">
                  <div className="user-info">
                    <User size={20} className="user-icon" />
                    <span className="user-name">{review.user}</span>
                  </div>
                  <RatingStars rating={review.rating} />
                </div>
                <div className="review-content">
                  <p>{review.content}</p>
                  {review.hasImage && review.imageUrl && (
                    <div className="review-image">
                      <img 
                        src={review.imageUrl} 
                        alt="Zadbane dłonie po użyciu HANDYcream" 
                      />
                    </div>
                  )}
                </div>
                <div className="review-date">{review.date}</div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewsSection;
