export type Size = 'small' | 'medium' | 'large';
export type Gender = 'male' | 'female' | 'either';
export type Personality = 'energetic' | 'calm' | 'playful' | 'loyal';

export type DogName = {
  name: string;
  gender: Exclude<Gender, 'either'>;
  sizes: readonly Size[];
  traits: readonly Personality[];
};

// ponytail: curated list (~80 names), not a phonetic generator — good enough for "재미로 추천",
// upgrade to a generated pool (see korean-name-recommender/lib/names) if variety ever matters.
export const DOG_NAME_POOL: readonly DogName[] = [
  { name: '초코', gender: 'male', sizes: ['small', 'medium'], traits: ['playful', 'loyal'] },
  { name: '보리', gender: 'male', sizes: ['small', 'medium', 'large'], traits: ['calm', 'loyal'] },
  { name: '몽이', gender: 'male', sizes: ['small'], traits: ['energetic', 'playful'] },
  { name: '단비', gender: 'female', sizes: ['small', 'medium'], traits: ['calm', 'loyal'] },
  { name: '두부', gender: 'female', sizes: ['small'], traits: ['playful', 'calm'] },
  { name: '별이', gender: 'female', sizes: ['small', 'medium'], traits: ['energetic', 'playful'] },
  { name: '망고', gender: 'male', sizes: ['small', 'medium'], traits: ['playful', 'energetic'] },
  { name: '뽀삐', gender: 'female', sizes: ['small'], traits: ['playful', 'loyal'] },
  { name: '해피', gender: 'male', sizes: ['small', 'medium', 'large'], traits: ['energetic', 'playful'] },
  { name: '럭키', gender: 'male', sizes: ['small', 'medium', 'large'], traits: ['loyal', 'calm'] },
  { name: '코코', gender: 'female', sizes: ['small', 'medium'], traits: ['playful', 'calm'] },
  { name: '방울', gender: 'female', sizes: ['small'], traits: ['energetic', 'playful'] },
  { name: '순돌', gender: 'male', sizes: ['medium', 'large'], traits: ['calm', 'loyal'] },
  { name: '깜비', gender: 'male', sizes: ['medium', 'large'], traits: ['loyal', 'energetic'] },
  { name: '나비', gender: 'female', sizes: ['small', 'medium'], traits: ['calm', 'playful'] },
  { name: '뭉치', gender: 'male', sizes: ['small', 'medium'], traits: ['playful', 'energetic'] },
  { name: '푸딩', gender: 'female', sizes: ['small'], traits: ['calm', 'loyal'] },
  { name: '땅콩', gender: 'male', sizes: ['small'], traits: ['playful', 'energetic'] },
  { name: '까망', gender: 'male', sizes: ['medium', 'large'], traits: ['loyal', 'calm'] },
  { name: '하늘', gender: 'female', sizes: ['small', 'medium', 'large'], traits: ['calm', 'loyal'] },
  { name: '두리', gender: 'female', sizes: ['small', 'medium'], traits: ['playful', 'loyal'] },
  { name: '순이', gender: 'female', sizes: ['medium', 'large'], traits: ['calm', 'loyal'] },
  { name: '점박이', gender: 'male', sizes: ['medium', 'large'], traits: ['energetic', 'playful'] },
  { name: '콩이', gender: 'female', sizes: ['small'], traits: ['playful', 'energetic'] },
  { name: '설이', gender: 'female', sizes: ['small', 'medium'], traits: ['calm', 'playful'] },
  { name: '봉구', gender: 'male', sizes: ['medium', 'large'], traits: ['loyal', 'playful'] },
  { name: '루비', gender: 'female', sizes: ['small', 'medium'], traits: ['energetic', 'loyal'] },
  { name: '만두', gender: 'male', sizes: ['small'], traits: ['calm', 'playful'] },
  { name: '토리', gender: 'female', sizes: ['small', 'medium'], traits: ['playful', 'energetic'] },
  { name: '봄이', gender: 'female', sizes: ['small', 'medium', 'large'], traits: ['calm', 'loyal'] },
  { name: '태풍', gender: 'male', sizes: ['medium', 'large'], traits: ['energetic', 'loyal'] },
  { name: '구름', gender: 'male', sizes: ['medium', 'large'], traits: ['calm', 'loyal'] },
  { name: '별사탕', gender: 'female', sizes: ['small'], traits: ['playful', 'energetic'] },
  { name: '초롱', gender: 'female', sizes: ['small', 'medium'], traits: ['calm', 'playful'] },
  { name: '진돌', gender: 'male', sizes: ['medium', 'large'], traits: ['loyal', 'calm'] },
  { name: '별똥', gender: 'male', sizes: ['small', 'medium'], traits: ['energetic', 'playful'] },
];
