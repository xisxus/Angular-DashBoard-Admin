export interface GetPackageBudget {
  packageID: number;
  estimatedFoodCost: number;
  estimatedTransportCost: number;
  estimatedAccommodationCost: number;
  otherCost: number;
  profitPercent: number;
  subtotal: number;
  profit: number;
  totalPackageCost: number;
  individualPackageCost: number;
}
