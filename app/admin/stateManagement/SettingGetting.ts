// hooks/useFetchData.js
import { useState, useEffect } from "react";
import axios from "axios";
export interface InstitutionSettings {
  security: {
    allowGuestAccess: boolean;
    requireLibraryCard: boolean;
    patronActivityTracking: boolean;
  };
  condition: {
    old: number;
    notNew: number;
  };
  circulation: {
    maxRenewals: number;
    reserveBook: boolean;
    lateFeePerDay: number;
    maxLoanPeriod: number;
    overdueGracePeriod: number;
  };
  acquisitions: {
    budgetLimit: number;
    purchaseRequestsAllowed: boolean;
  };
  notification: {
    smsNotifications: boolean;
    emailNotifications: boolean;
    reminderDaysBeforeDue: number;
  };
  userPermissions: {
    borrowerLimit: number;
    canReserveBooks: boolean;
    canRequestBookAcquisitions: boolean;
  };
}

const useFetchData = (url) => {
  const [data, setData] = useState<InstitutionSettings>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!url) return;

    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(url);
        setData(response.data);
        setError(null); // Clear previous errors
      } catch (err) {
        setError(err.message || "An error occurred");
        setData(null); // Clear data on error
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetchData;
