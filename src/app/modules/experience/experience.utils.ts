// Format date to display in a readable format (e.g., "Jan 2020 - Present" or "Jan 2020 - Dec 2022")
export const formatDateRange = (startDate: Date, endDate?: Date, isCurrent = false): string => {
  const start = new Date(startDate);
  const startFormatted = start.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  
  if (isCurrent) {
    return `${startFormatted} - Present`;
  }
  
  if (endDate) {
    const end = new Date(endDate);
    const endFormatted = end.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
    return `${startFormatted} - ${endFormatted}`;
  }
  
  return startFormatted;
};

// Calculate duration between two dates in years and months
export const calculateDuration = (startDate: Date, endDate?: Date, isCurrent = false): string => {
  const start = new Date(startDate);
  const end = isCurrent ? new Date() : endDate ? new Date(endDate) : start;
  
  const years = end.getFullYear() - start.getFullYear();
  const months = end.getMonth() - start.getMonth();
  
  const totalMonths = years * 12 + months;
  const remainingMonths = totalMonths % 12;
  const totalYears = Math.floor(totalMonths / 12);
  
  if (totalYears > 0 && remainingMonths > 0) {
    return `${totalYears} year${totalYears > 1 ? 's' : ''} ${remainingMonths} month${remainingMonths > 1 ? 's' : ''}`;
  } else if (totalYears > 0) {
    return `${totalYears} year${totalYears > 1 ? 's' : ''}`;
  } else {
    return `${remainingMonths} month${remainingMonths > 1 ? 's' : ''}`;
  }
}; 