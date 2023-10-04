export interface SearchProps {
    city?: string;
    zip?: number;
    setCity: React.Dispatch<React.SetStateAction<string>>; 
}