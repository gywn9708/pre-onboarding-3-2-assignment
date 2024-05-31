function formatDate(date: string) {
  const targetDate = new Date(date);
  const year = targetDate.getFullYear();
  const month = targetDate.getMonth() + 1;
  const day = targetDate.getDate();
  const formattedDate = `${year}-${month}-${day}`;
  return formattedDate;
}

export { formatDate };
