
export interface Poll {
  id: number;
  title: string;
  question: string;
  status: 'Active' | 'Closed';
  totalVotes: number;
}
