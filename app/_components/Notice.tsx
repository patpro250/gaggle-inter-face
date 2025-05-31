import { AlertTriangle } from "lucide-react";

export default function PaymentWarningCard() {
  return (
    <div className="bg-yellow-50  border-l-4 border-yellow-500 text-yellow-800 p-6 rounded-lg shadow-sm flex items-starts justify-center gap-4">
      <AlertTriangle className="w-6 h-6 mt-1 text-yellow-500" />
      <div>
        <h3 className="text-lg font-semibold mb-1">Important Notice</h3>
        <p className="text-sm">
          <p>
            After completing your payment, please call{" "}
            <strong>0786 914 904</strong> or <strong>0785 578 822</strong> to
            receive your confirmation code.
          </p>
          <p className="mt-2">
            The confirmation code will be sent to the phone number you provided
            in the payment form.
          </p>
        </p>
      </div>
    </div>
  );
}
