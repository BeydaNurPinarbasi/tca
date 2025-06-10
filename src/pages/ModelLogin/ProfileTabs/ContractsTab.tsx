import { useEffect, useState } from "react";
import { getContracts } from "../../../services/contractsService";
import type { Contract } from "../../../services/contractsService";

export default function ContractsTab() {
  const [contracts, setContracts] = useState<Contract[]>([]);

  useEffect(() => {
    getContracts().then(setContracts).catch(console.error);
  }, []);

  return (
    <div className="space-y-4">
      <ul className="space-y-3">
        {contracts.map((contract, index) => (
          <li
            key={index}
            className="border p-4 rounded-lg bg-neutral-50 border-neutral-200"
          >
            <h4 className="font-medium text-neutral-800">{contract.title}</h4>
            <p className="text-sm text-neutral-500">
              {new Date(contract.signedAt).toLocaleString("tr-TR", {
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              })}{" "}
              tarihinde kabul ettin.
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
