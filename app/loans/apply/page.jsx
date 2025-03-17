"use client"

import { useState } from "react"
import { CreditCard, HelpCircle, CheckCircle, AlertTriangle } from "lucide-react"

export default function LoanApplication() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    loanAmount: "",
    loanPurpose: "",
    repaymentPeriod: "",
    monthlyIncome: "",
    existingLoans: "no",
    existingLoanAmount: "",
    collateral: "no",
    collateralType: "",
    collateralValue: "",
    agreeTerms: false,
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    })
  }

  const nextStep = () => {
    setStep(step + 1)
    window.scrollTo(0, 0)
  }

  const prevStep = () => {
    setStep(step - 1)
    window.scrollTo(0, 0)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real application, you would send this data to your backend
    console.log("Loan application submitted:", formData)
    nextStep()
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-orange-600 text-white py-6 px-8">
            <h1 className="text-2xl font-bold">Micro-Loan Application</h1>
            <p className="mt-2">Apply for a small loan to grow your craft business</p>
          </div>

          {/* Progress Steps */}
          <div className="px-8 py-4 border-b">
            <div className="flex justify-between">
              <div className={`flex flex-col items-center ${step >= 1 ? "text-orange-600" : "text-gray-400"}`}>
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 1 ? "bg-orange-100 text-orange-600" : "bg-gray-100 text-gray-400"}`}
                >
                  1
                </div>
                <span className="text-xs mt-1">Loan Details</span>
              </div>
              <div
                className={`flex-1 border-t border-dashed self-center mx-2 ${step >= 2 ? "border-orange-300" : "border-gray-300"}`}
              ></div>
              <div className={`flex flex-col items-center ${step >= 2 ? "text-orange-600" : "text-gray-400"}`}>
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 2 ? "bg-orange-100 text-orange-600" : "bg-gray-100 text-gray-400"}`}
                >
                  2
                </div>
                <span className="text-xs mt-1">Financial Info</span>
              </div>
              <div
                className={`flex-1 border-t border-dashed self-center mx-2 ${step >= 3 ? "border-orange-300" : "border-gray-300"}`}
              ></div>
              <div className={`flex flex-col items-center ${step >= 3 ? "text-orange-600" : "text-gray-400"}`}>
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 3 ? "bg-orange-100 text-orange-600" : "bg-gray-100 text-gray-400"}`}
                >
                  3
                </div>
                <span className="text-xs mt-1">Review & Submit</span>
              </div>
              <div
                className={`flex-1 border-t border-dashed self-center mx-2 ${step >= 4 ? "border-orange-300" : "border-gray-300"}`}
              ></div>
              <div className={`flex flex-col items-center ${step >= 4 ? "text-orange-600" : "text-gray-400"}`}>
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 4 ? "bg-orange-100 text-orange-600" : "bg-gray-100 text-gray-400"}`}
                >
                  4
                </div>
                <span className="text-xs mt-1">Complete</span>
              </div>
            </div>
          </div>

          <div className="p-8">
            {step === 1 && (
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  nextStep()
                }}
              >
                <h2 className="text-xl font-semibold mb-6">Loan Details</h2>

                <div className="mb-6">
                  <label htmlFor="loanAmount" className="block text-sm font-medium text-gray-700 mb-1">
                    Loan Amount (₹)*
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">₹</span>
                    <input
                      type="number"
                      id="loanAmount"
                      name="loanAmount"
                      value={formData.loanAmount}
                      onChange={handleChange}
                      required
                      min="1000"
                      max="50000"
                      className="w-full pl-8 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                      placeholder="Enter amount (1,000 - 50,000)"
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Minimum: ₹1,000 | Maximum: ₹50,000</p>
                </div>

                <div className="mb-6">
                  <label htmlFor="loanPurpose" className="block text-sm font-medium text-gray-700 mb-1">
                    Purpose of Loan*
                  </label>
                  <select
                    id="loanPurpose"
                    name="loanPurpose"
                    value={formData.loanPurpose}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  >
                    <option value="">Select purpose</option>
                    <option value="Raw Materials">Purchase Raw Materials</option>
                    <option value="Tools & Equipment">Tools & Equipment</option>
                    <option value="Workshop Improvement">Workshop Improvement</option>
                    <option value="Marketing & Packaging">Marketing & Packaging</option>
                    <option value="Training & Skill Development">Training & Skill Development</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="mb-6">
                  <label htmlFor="repaymentPeriod" className="block text-sm font-medium text-gray-700 mb-1">
                    Repayment Period*
                  </label>
                  <select
                    id="repaymentPeriod"
                    name="repaymentPeriod"
                    value={formData.repaymentPeriod}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  >
                    <option value="">Select period</option>
                    <option value="3 months">3 months</option>
                    <option value="6 months">6 months</option>
                    <option value="9 months">9 months</option>
                    <option value="12 months">12 months</option>
                    <option value="18 months">18 months</option>
                    <option value="24 months">24 months</option>
                  </select>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg mb-6">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <HelpCircle className="h-5 w-5 text-blue-500" />
                    </div>
                    <div className="ml-3">
                      <h3 className="text-sm font-medium text-blue-800">Loan Information</h3>
                      <div className="mt-2 text-sm text-blue-700">
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Interest rate: 6% per annum (flat)</li>
                          <li>No processing fee for loans below ₹10,000</li>
                          <li>1% processing fee for loans above ₹10,000</li>
                          <li>No prepayment penalty</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end mt-8">
                  <button
                    type="submit"
                    className="bg-orange-600 text-white px-6 py-2 rounded-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                  >
                    Next Step
                  </button>
                </div>
              </form>
            )}

            {step === 2 && (
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  nextStep()
                }}
              >
                <h2 className="text-xl font-semibold mb-6">Financial Information</h2>

                <div className="mb-6">
                  <label htmlFor="monthlyIncome" className="block text-sm font-medium text-gray-700 mb-1">
                    Average Monthly Income (₹)*
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">₹</span>
                    <input
                      type="number"
                      id="monthlyIncome"
                      name="monthlyIncome"
                      value={formData.monthlyIncome}
                      onChange={handleChange}
                      required
                      className="w-full pl-8 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                      placeholder="Enter your average monthly income"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Do you have any existing loans?*
                  </label>
                  <div className="flex space-x-4">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="existingLoans"
                        value="yes"
                        checked={formData.existingLoans === "yes"}
                        onChange={handleChange}
                        className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300"
                      />
                      <span className="ml-2 text-sm text-gray-700">Yes</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="existingLoans"
                        value="no"
                        checked={formData.existingLoans === "no"}
                        onChange={handleChange}
                        className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300"
                      />
                      <span className="ml-2 text-sm text-gray-700">No</span>
                    </label>
                  </div>
                </div>

                {formData.existingLoans === "yes" && (
                  <div className="pl-6 mb-6 border-l-2 border-orange-200">
                    <div>
                      <label htmlFor="existingLoanAmount" className="block text-sm font-medium text-gray-700 mb-1">
                        Total Outstanding Loan Amount (₹)*
                      </label>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">₹</span>
                        <input
                          type="number"
                          id="existingLoanAmount"
                          name="existingLoanAmount"
                          value={formData.existingLoanAmount}
                          onChange={handleChange}
                          required={formData.existingLoans === "yes"}
                          className="w-full pl-8 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                          placeholder="Enter total outstanding amount"
                        />
                      </div>
                    </div>
                  </div>
                )}

                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Are you offering any collateral for this loan?*
                  </label>
                  <div className="flex space-x-4">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="collateral"
                        value="yes"
                        checked={formData.collateral === "yes"}
                        onChange={handleChange}
                        className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300"
                      />
                      <span className="ml-2 text-sm text-gray-700">Yes</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="collateral"
                        value="no"
                        checked={formData.collateral === "no"}
                        onChange={handleChange}
                        className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300"
                      />
                      <span className="ml-2 text-sm text-gray-700">No</span>
                    </label>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    Note: Collateral is not mandatory for loans below ₹10,000
                  </p>
                </div>

                {formData.collateral === "yes" && (
                  <div className="pl-6 mb-6 border-l-2 border-orange-200">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                      <div>
                        <label htmlFor="collateralType" className="block text-sm font-medium text-gray-700 mb-1">
                          Collateral Type*
                        </label>
                        <select
                          id="collateralType"
                          name="collateralType"
                          value={formData.collateralType}
                          onChange={handleChange}
                          required={formData.collateral === "yes"}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                        >
                          <option value="">Select collateral type</option>
                          <option value="Gold Jewelry">Gold Jewelry</option>
                          <option value="Land/Property">Land/Property</option>
                          <option value="Equipment">Equipment</option>
                          <option value="Vehicle">Vehicle</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="collateralValue" className="block text-sm font-medium text-gray-700 mb-1">
                          Estimated Value (₹)*
                        </label>
                        <div className="relative">
                          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">₹</span>
                          <input
                            type="number"
                            id="collateralValue"
                            name="collateralValue"
                            value={formData.collateralValue}
                            onChange={handleChange}
                            required={formData.collateral === "yes"}
                            className="w-full pl-8 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                            placeholder="Enter estimated value"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <div className="bg-yellow-50 p-4 rounded-lg mb-6">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <AlertTriangle className="h-5 w-5 text-yellow-500" />
                    </div>
                    <div className="ml-3">
                      <h3 className="text-sm font-medium text-yellow-800">Important Information</h3>
                      <div className="mt-2 text-sm text-yellow-700">
                        <p>
                          Please ensure all information provided is accurate. False information may lead to rejection of
                          your loan application.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between mt-8">
                  <button
                    type="button"
                    onClick={prevStep}
                    className="bg-gray-200 text-gray-700 px-6 py-2 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                  >
                    Previous
                  </button>
                  <button
                    type="submit"
                    className="bg-orange-600 text-white px-6 py-2 rounded-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                  >
                    Next Step
                  </button>
                </div>
              </form>
            )}

            {step === 3 && (
              <form onSubmit={handleSubmit}>
                <h2 className="text-xl font-semibold mb-6">Review & Submit</h2>

                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <h3 className="font-semibold text-gray-700 mb-4">Loan Details</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-500">Loan Amount</p>
                      <p className="font-medium">₹{formData.loanAmount}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Purpose</p>
                      <p className="font-medium">{formData.loanPurpose}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Repayment Period</p>
                      <p className="font-medium">{formData.repaymentPeriod}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Monthly Income</p>
                      <p className="font-medium">₹{formData.monthlyIncome}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Existing Loans</p>
                      <p className="font-medium">{formData.existingLoans === "yes" ? "Yes" : "No"}</p>
                    </div>
                    {formData.existingLoans === "yes" && (
                      <div>
                        <p className="text-sm text-gray-500">Outstanding Loan Amount</p>
                        <p className="font-medium">₹{formData.existingLoanAmount}</p>
                      </div>
                    )}
                    <div>
                      <p className="text-sm text-gray-500">Offering Collateral</p>
                      <p className="font-medium">{formData.collateral === "yes" ? "Yes" : "No"}</p>
                    </div>
                    {formData.collateral === "yes" && (
                      <>
                        <div>
                          <p className="text-sm text-gray-500">Collateral Type</p>
                          <p className="font-medium">{formData.collateralType}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Collateral Value</p>
                          <p className="font-medium">₹{formData.collateralValue}</p>
                        </div>
                      </>
                    )}
                  </div>
                </div>

                <div className="bg-orange-50 p-4 rounded-lg mb-6">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <CreditCard className="h-5 w-5 text-orange-500" />
                    </div>
                    <div className="ml-3">
                      <h3 className="text-sm font-medium text-orange-800">Loan Summary</h3>
                      <div className="mt-2 text-sm text-orange-700">
                        <div className="grid grid-cols-2 gap-2">
                          <p>Loan Amount:</p>
                          <p className="font-medium">₹{formData.loanAmount}</p>

                          <p>Interest Rate:</p>
                          <p className="font-medium">6% per annum</p>

                          <p>Processing Fee:</p>
                          <p className="font-medium">
                            {Number.parseInt(formData.loanAmount) > 10000
                              ? `₹${(Number.parseInt(formData.loanAmount) * 0.01).toFixed(2)} (1%)`
                              : "No Fee"}
                          </p>

                          <p>Repayment Period:</p>
                          <p className="font-medium">{formData.repaymentPeriod}</p>

                          <p className="font-medium">Monthly Installment:</p>
                          <p className="font-medium">
                            {formData.repaymentPeriod && formData.loanAmount
                              ? `₹${calculateEMI(formData.loanAmount, 6, formData.repaymentPeriod)}`
                              : "-"}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="agreeTerms"
                      checked={formData.agreeTerms}
                      onChange={handleChange}
                      required
                      className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
                    />
                    <span className="ml-2 text-sm text-gray-700">
                      I confirm that all information provided is accurate and I agree to the{" "}
                      <a href="#" className="text-orange-600 hover:underline">
                        Loan Terms and Conditions
                      </a>
                    </span>
                  </label>
                </div>

                <div className="flex justify-between mt-8">
                  <button
                    type="button"
                    onClick={prevStep}
                    className="bg-gray-200 text-gray-700 px-6 py-2 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                  >
                    Previous
                  </button>
                  <button
                    type="submit"
                    className="bg-orange-600 text-white px-6 py-2 rounded-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                  >
                    Submit Application
                  </button>
                </div>
              </form>
            )}

            {step === 4 && (
              <div className="text-center py-8">
                <div className="bg-green-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="h-10 w-10 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Application Submitted!</h2>
                <p className="text-gray-600 mb-8">
                  Thank you for applying for a micro-loan with Karmasathi. Your application has been submitted
                  successfully and is under review.
                </p>
                <div className="bg-gray-50 p-6 rounded-lg mb-8">
                  <h3 className="font-semibold text-gray-700 mb-3">What happens next?</h3>
                  <ol className="text-left text-gray-600 space-y-2">
                    <li className="flex items-start">
                      <span className="bg-orange-100 text-orange-600 rounded-full w-6 h-6 flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                        1
                      </span>
                      <span>Our team will review your application within 3-5 business days.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-orange-100 text-orange-600 rounded-full w-6 h-6 flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                        2
                      </span>
                      <span>You will receive an SMS and email notification about the status of your application.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-orange-100 text-orange-600 rounded-full w-6 h-6 flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                        3
                      </span>
                      <span>If approved, the loan amount will be transferred to your registered bank account.</span>
                    </li>
                  </ol>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/"
                    className="bg-orange-600 text-white px-6 py-3 rounded-md hover:bg-orange-700 inline-block"
                  >
                    Return to Homepage
                  </a>
                  <a
                    href="/dashboard"
                    className="bg-transparent border border-orange-600 text-orange-600 px-6 py-3 rounded-md hover:bg-orange-50 inline-block"
                  >
                    Go to Dashboard
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

// Helper function to calculate EMI
function calculateEMI(principal, interestRate, tenure) {
  // Convert tenure from string to number of months
  let tenureMonths
  if (tenure.includes("months")) {
    tenureMonths = Number.parseInt(tenure.split(" ")[0])
  } else {
    // If tenure is in years, convert to months
    tenureMonths = Number.parseInt(tenure.split(" ")[0]) * 12
  }

  // Convert annual interest rate to monthly and decimal form
  const monthlyRate = interestRate / 12 / 100

  // Calculate EMI using formula: P * r * (1+r)^n / ((1+r)^n - 1)
  const emi =
    (principal * monthlyRate * Math.pow(1 + monthlyRate, tenureMonths)) / (Math.pow(1 + monthlyRate, tenureMonths) - 1)

  return emi.toFixed(2)
}

