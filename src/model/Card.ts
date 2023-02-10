export interface Card{
    faceUp: boolean;
    number?: CardNumber;
    suit?: CardSuit;
}
export enum CardSuit{
    Club,
    Diamond,
    Heart,
    Spade
}
export enum CardNumber{
    Ace,
    Two,
    Three,
    Four,
    Five,
    Six,
    Seven,
    Eight,
    Nine,
    Ten,
    Jack,
    Queen,
    King,
}