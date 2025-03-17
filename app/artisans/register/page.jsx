"use client"

import { useState } from "react"
import { Camera, Upload, CheckCircle } from "lucide-react"

export default function ArtisanRegistration() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    district: "",
    pincode: "",
    craftType: "",
    experience: "",
    bio: "",
    hasGovtId: false,
    govtIdType: "",
    govtIdNumber: "",
    bankAccount: false,
    accountNumber: "",
    ifscCode: "",
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
    console.log("Form submitted:", formData)
    nextStep()
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-orange-600 text-white py-6 px-8">
            <h1 className="text-2xl font-bold">Artisan Registration</h1>
            <p className="mt-2">Join the Karmasathi platform to showcase your craft and grow your business</p>
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
                <span className="text-xs mt-1">Personal Info</span>
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
                <span className="text-xs mt-1">Craft Details</span>
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
                <span className="text-xs mt-1">Documents</span>
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
                <h2 className="text-xl font-semibold mb-6">Personal Information</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name*
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address*
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number*
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div>
                    <label htmlFor="district" className="block text-sm font-medium text-gray-700 mb-1">
                      District*
                    </label>
                    <select
                      id="district"
                      name="district"
                      value={formData.district}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    >
                      <option value="">Select your district</option>
                      <option value="Kolkata">Kolkata</option>
                      <option value="Howrah">Howrah</option>
                      <option value="North 24 Parganas">North 24 Parganas</option>
                      <option value="South 24 Parganas">South 24 Parganas</option>
                      <option value="Murshidabad">Murshidabad</option>
                      <option value="Birbhum">Birbhum</option>
                      <option value="Purba Medinipur">Purba Medinipur</option>
                      <option value="Paschim Medinipur">Paschim Medinipur</option>
                      <option value="Bankura">Bankura</option>
                      <option value="Purulia">Purulia</option>
                    </select>
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Address*
                  </label>
                  <textarea
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="Enter your full address"
                    rows="3"
                  ></textarea>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="pincode" className="block text-sm font-medium text-gray-700 mb-1">
                      PIN Code*
                    </label>
                    <input
                      type="text"
                      id="pincode"
                      name="pincode"
                      value={formData.pincode}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                      placeholder="Enter your PIN code"
                    />
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
                <h2 className="text-xl font-semibold mb-6">Craft Details</h2>

                <div className="mb-6">
                  <label htmlFor="craftType" className="block text-sm font-medium text-gray-700 mb-1">
                    Type of Craft*
                  </label>
                  <select
                    id="craftType"
                    name="craftType"
                    value={formData.craftType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  >
                    <option value="">Select your craft</option>
                    <option value="Kantha Embroidery">Kantha Embroidery</option>
                    <option value="Clay Pottery">Clay Pottery</option>
                    <option value="Silk Weaving">Silk Weaving</option>
                    <option value="Bamboo Craft">Bamboo Craft</option>
                    <option value="Dokra Metal Casting">Dokra Metal Casting</option>
                    <option value="Handloom Textiles">Handloom Textiles</option>
                    <option value="Wood Carving">Wood Carving</option>
                    <option value="Jute Craft">Jute Craft</option>
                    <option value="Terracotta">Terracotta</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="mb-6">
                  <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-1">
                    Years of Experience*
                  </label>
                  <select
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  >
                    <option value="">Select years of experience</option>
                    <option value="Less than 1 year">Less than 1 year</option>
                    <option value="1-3 years">1-3 years</option>
                    <option value="3-5 years">3-5 years</option>
                    <option value="5-10 years">5-10 years</option>
                    <option value="10+ years">10+ years</option>
                  </select>
                </div>

                <div className="mb-6">
                  <label htmlFor="bio" className="block text-sm font-medium text-gray-700 mb-1">
                    About Your Craft*
                  </label>
                  <textarea
                    id="bio"
                    name="bio"
                    value={formData.bio}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="Tell us about your craft, skills, and experience..."
                    rows="5"
                  ></textarea>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-3">Upload Photos of Your Work*</label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {[1, 2, 3].map((index) => (
                      <div
                        key={index}
                        className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-orange-500 cursor-pointer"
                      >
                        <div className="flex flex-col items-center justify-center h-32">
                          <Camera className="h-10 w-10 text-gray-400 mb-2" />
                          <span className="text-sm text-gray-500">Upload Photo {index}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-gray-500 mt-2">
                    Upload clear photos of your craft items. Maximum size: 5MB per image.
                  </p>
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
                <h2 className="text-xl font-semibold mb-6">Documents & Banking</h2>

                <div className="mb-6">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="hasGovtId"
                      checked={formData.hasGovtId}
                      onChange={handleChange}
                      className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
                    />
                    <span className="ml-2 text-sm text-gray-700">I have a government ID</span>
                  </label>
                </div>

                {formData.hasGovtId && (
                  <div className="pl-6 mb-6 border-l-2 border-orange-200">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                      <div>
                        <label htmlFor="govtIdType" className="block text-sm font-medium text-gray-700 mb-1">
                          ID Type*
                        </label>
                        <select
                          id="govtIdType"
                          name="govtIdType"
                          value={formData.govtIdType}
                          onChange={handleChange}
                          required={formData.hasGovtId}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                        >
                          <option value="">Select ID type</option>
                          <option value="Aadhaar Card">Aadhaar Card</option>
                          <option value="Voter ID">Voter ID</option>
                          <option value="PAN Card">PAN Card</option>
                          <option value="Driving License">Driving License</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="govtIdNumber" className="block text-sm font-medium text-gray-700 mb-1">
                          ID Number*
                        </label>
                        <input
                          type="text"
                          id="govtIdNumber"
                          name="govtIdNumber"
                          value={formData.govtIdNumber}
                          onChange={handleChange}
                          required={formData.hasGovtId}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                          placeholder="Enter your ID number"
                        />
                      </div>
                    </div>
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Upload ID Proof*</label>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-orange-500 cursor-pointer">
                        <div className="flex flex-col items-center justify-center h-24">
                          <Upload className="h-8 w-8 text-gray-400 mb-2" />
                          <span className="text-sm text-gray-500">Click to upload ID proof</span>
                          <span className="text-xs text-gray-400 mt-1">PDF, JPG or PNG (Max. 2MB)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <div className="mb-6">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="bankAccount"
                      checked={formData.bankAccount}
                      onChange={handleChange}
                      className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
                    />
                    <span className="ml-2 text-sm text-gray-700">I have a bank account</span>
                  </label>
                </div>

                {formData.bankAccount && (
                  <div className="pl-6 mb-6 border-l-2 border-orange-200">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="accountNumber" className="block text-sm font-medium text-gray-700 mb-1">
                          Account Number*
                        </label>
                        <input
                          type="text"
                          id="accountNumber"
                          name="accountNumber"
                          value={formData.accountNumber}
                          onChange={handleChange}
                          required={formData.bankAccount}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                          placeholder="Enter your account number"
                        />
                      </div>
                      <div>
                        <label htmlFor="ifscCode" className="block text-sm font-medium text-gray-700 mb-1">
                          IFSC Code*
                        </label>
                        <input
                          type="text"
                          id="ifscCode"
                          name="ifscCode"
                          value={formData.ifscCode}
                          onChange={handleChange}
                          required={formData.bankAccount}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                          placeholder="Enter IFSC code"
                        />
                      </div>
                    </div>
                  </div>
                )}

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
                      I agree to the{" "}
                      <a href="#" className="text-orange-600 hover:underline">
                        Terms and Conditions
                      </a>{" "}
                      and{" "}
                      <a href="#" className="text-orange-600 hover:underline">
                        Privacy Policy
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
                    Submit Registration
                  </button>
                </div>
              </form>
            )}

            {step === 4 && (
              <div className="text-center py-8">
                <div className="bg-green-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="h-10 w-10 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Registration Successful!</h2>
                <p className="text-gray-600 mb-8">
                  Thank you for registering with Karmasathi. Your application has been submitted successfully and is
                  under review.
                </p>
                <div className="bg-gray-50 p-6 rounded-lg mb-8">
                  <h3 className="font-semibold text-gray-700 mb-3">What happens next?</h3>
                  <ol className="text-left text-gray-600 space-y-2">
                    <li className="flex items-start">
                      <span className="bg-orange-100 text-orange-600 rounded-full w-6 h-6 flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                        1
                      </span>
                      <span>Our team will review your application within 2-3 business days.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-orange-100 text-orange-600 rounded-full w-6 h-6 flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                        2
                      </span>
                      <span>You will receive an email notification once your profile is approved.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-orange-100 text-orange-600 rounded-full w-6 h-6 flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                        3
                      </span>
                      <span>You can then log in to your account and start listing your products.</span>
                    </li>
                  </ol>
                </div>
                <a href="/" className="bg-orange-600 text-white px-6 py-3 rounded-md hover:bg-orange-700 inline-block">
                  Return to Homepage
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

