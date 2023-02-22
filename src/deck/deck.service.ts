import { Injectable } from '@nestjs/common';
import { Card } from 'src/state/schemas/card.schema';
import { GameState } from 'src/state/schemas/gamestate.schema';
import { CardNumber, CardSuit } from 'src/view/schema/Card';

@Injectable()
export class DeckService {
    
    drawCardFromDeck(state: GameState): Card{
        const cards: Card[] = this.allCards();
        
        const cardsNotInDeck: Card[] = [];
        cardsNotInDeck.concat(state.cards);
        cardsNotInDeck.concat(state.table_cards);
        cardsNotInDeck.concat(state.oppoent_cards);

        cardsNotInDeck.forEach(currentCard => {
            const faceUpCard = currentCard;
            const faceDownCard = currentCard;
            faceUpCard.faceUp=true;
            faceDownCard.faceUp=false;

            const faceUpFound = cards.indexOf(faceUpCard);
            const faceDownFound = cards.indexOf(faceDownCard);

            if (faceUpFound!=-1){
                cards.splice(faceUpFound,1);
            }
            if (faceDownFound!=-1){
                cards.splice(faceDownFound,1);
            }
        });

        const shuffledCards = cards.sort((a, b) => 0.5 - Math.random());
        return shuffledCards[0];
    }

    allCards(): Card[] {
        return [
            {faceUp: false, number: CardNumber.Ace, suit: CardSuit.Club},
            {faceUp: false, number: CardNumber.Ace, suit: CardSuit.Diamond},
            {faceUp: false, number: CardNumber.Ace, suit: CardSuit.Heart},
            {faceUp: false, number: CardNumber.Ace, suit: CardSuit.Spade},
            {faceUp: false, number: CardNumber.Two, suit: CardSuit.Club},
            {faceUp: false, number: CardNumber.Two, suit: CardSuit.Diamond},
            {faceUp: false, number: CardNumber.Two, suit: CardSuit.Heart},
            {faceUp: false, number: CardNumber.Two, suit: CardSuit.Spade},
            {faceUp: false, number: CardNumber.Three, suit: CardSuit.Club},
            {faceUp: false, number: CardNumber.Three, suit: CardSuit.Diamond},
            {faceUp: false, number: CardNumber.Three, suit: CardSuit.Heart},
            {faceUp: false, number: CardNumber.Three, suit: CardSuit.Spade},
            {faceUp: false, number: CardNumber.Four, suit: CardSuit.Club},
            {faceUp: false, number: CardNumber.Four, suit: CardSuit.Diamond},
            {faceUp: false, number: CardNumber.Four, suit: CardSuit.Heart},
            {faceUp: false, number: CardNumber.Four, suit: CardSuit.Spade},
            {faceUp: false, number: CardNumber.Five, suit: CardSuit.Club},
            {faceUp: false, number: CardNumber.Five, suit: CardSuit.Diamond},
            {faceUp: false, number: CardNumber.Five, suit: CardSuit.Heart},
            {faceUp: false, number: CardNumber.Five, suit: CardSuit.Spade},
            {faceUp: false, number: CardNumber.Six, suit: CardSuit.Club},
            {faceUp: false, number: CardNumber.Six, suit: CardSuit.Diamond},
            {faceUp: false, number: CardNumber.Six, suit: CardSuit.Heart},
            {faceUp: false, number: CardNumber.Six, suit: CardSuit.Spade},
            {faceUp: false, number: CardNumber.Seven, suit: CardSuit.Club},
            {faceUp: false, number: CardNumber.Seven, suit: CardSuit.Diamond},
            {faceUp: false, number: CardNumber.Seven, suit: CardSuit.Heart},
            {faceUp: false, number: CardNumber.Seven, suit: CardSuit.Spade},
            {faceUp: false, number: CardNumber.Eight, suit: CardSuit.Club},
            {faceUp: false, number: CardNumber.Eight, suit: CardSuit.Diamond},
            {faceUp: false, number: CardNumber.Eight, suit: CardSuit.Heart},
            {faceUp: false, number: CardNumber.Eight, suit: CardSuit.Spade},
            {faceUp: false, number: CardNumber.Nine, suit: CardSuit.Club},
            {faceUp: false, number: CardNumber.Nine, suit: CardSuit.Diamond},
            {faceUp: false, number: CardNumber.Nine, suit: CardSuit.Heart},
            {faceUp: false, number: CardNumber.Nine, suit: CardSuit.Spade},
            {faceUp: false, number: CardNumber.Ten, suit: CardSuit.Club},
            {faceUp: false, number: CardNumber.Ten, suit: CardSuit.Diamond},
            {faceUp: false, number: CardNumber.Ten, suit: CardSuit.Heart},
            {faceUp: false, number: CardNumber.Ten, suit: CardSuit.Spade},
            {faceUp: false, number: CardNumber.Jack, suit: CardSuit.Club},
            {faceUp: false, number: CardNumber.Jack, suit: CardSuit.Diamond},
            {faceUp: false, number: CardNumber.Jack, suit: CardSuit.Heart},
            {faceUp: false, number: CardNumber.Jack, suit: CardSuit.Spade},
            {faceUp: false, number: CardNumber.Queen, suit: CardSuit.Club},
            {faceUp: false, number: CardNumber.Queen, suit: CardSuit.Diamond},
            {faceUp: false, number: CardNumber.Queen, suit: CardSuit.Heart},
            {faceUp: false, number: CardNumber.Queen, suit: CardSuit.Spade},
            {faceUp: false, number: CardNumber.King, suit: CardSuit.Club},
            {faceUp: false, number: CardNumber.King, suit: CardSuit.Diamond},
            {faceUp: false, number: CardNumber.King, suit: CardSuit.Heart},
            {faceUp: false, number: CardNumber.King, suit: CardSuit.Spade},
        ] as Card[]
    }

}
