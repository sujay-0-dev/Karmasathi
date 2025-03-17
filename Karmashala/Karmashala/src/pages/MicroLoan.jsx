"use client"

import { useState } from "react"
import "./MicroLoan.css"

const MicroLoan = () => {
  const [activeTab, setActiveTab] = useState("about")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    craftType: "",
    loanAmount: "",
    purpose: "",
    repaymentPeriod: "6",
    experience: "",
    monthlyIncome: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
    }, 2000)
  }

  return (
    <div className="micro-loan">
      <div className="micro-loan-hero">
        <div className="container">
          <h1>Micro-Loan Program</h1>
          <p>Financial support for artisans to grow their craft and business</p>
        </div>
      </div>

      <div className="container">
        <div className="micro-loan-tabs">
          <div className={`tab ${activeTab === "about" ? "active" : ""}`} onClick={() => setActiveTab("about")}>
            About the Program
          </div>
          <div className={`tab ${activeTab === "apply" ? "active" : ""}`} onClick={() => setActiveTab("apply")}>
            Apply for Loan
          </div>
          <div className={`tab ${activeTab === "success" ? "active" : ""}`} onClick={() => setActiveTab("success")}>
            Success Stories
          </div>
          <div className={`tab ${activeTab === "faq" ? "active" : ""}`} onClick={() => setActiveTab("faq")}>
            FAQs
          </div>
        </div>

        <div className="micro-loan-content">
          {activeTab === "about" && (
            <div className="about-content">
              <div className="about-section">
                <h2>Empowering Artisans Through Financial Inclusion</h2>
                <p>
                  The Karmasathi Micro-Loan Program is designed to provide financial support to artisans across West
                  Bengal who often lack access to traditional banking services. Our goal is to help artisans grow their
                  businesses, improve their craft, and achieve financial independence.
                </p>
                <div className="about-grid">
                  <div className="about-card">
                    <div className="about-icon">
                      <i className="fas fa-rupee-sign"></i>
                    </div>
                    <h3>Affordable Loans</h3>
                    <p>Loans ranging from ₹5,000 to ₹50,000 with low interest rates and flexible repayment options.</p>
                  </div>
                  <div className="about-card">
                    <div className="about-icon">
                      <i className="fas fa-file-alt"></i>
                    </div>
                    <h3>Simple Process</h3>
                    <p>Minimal documentation and a straightforward application process designed for artisans.</p>
                  </div>
                  <div className="about-card">
                    <div className="about-icon">
                      <i className="fas fa-hands-helping"></i>
                    </div>
                    <h3>Supportive Community</h3>
                    <p>Peer-to-peer lending options and community support for loan repayment.</p>
                  </div>
                </div>
              </div>

              <div className="about-section">
                <h2>How It Works</h2>
                <div className="steps">
                  <div className="step">
                    <div className="step-number">1</div>
                    <div className="step-content">
                      <h3>Apply Online</h3>
                      <p>Fill out our simple application form with your details and loan requirements.</p>
                    </div>
                  </div>
                  <div className="step">
                    <div className="step-number">2</div>
                    <div className="step-content">
                      <h3>Verification</h3>
                      <p>
                        Our team verifies your application and assesses your eligibility based on your profile and
                        community reputation.
                      </p>
                    </div>
                  </div>
                  <div className="step">
                    <div className="step-number">3</div>
                    <div className="step-content">
                      <h3>Approval & Disbursement</h3>
                      <p>
                        Once approved, the loan amount is disbursed directly to your bank account or through local
                        microfinance partners.
                      </p>
                    </div>
                  </div>
                  <div className="step">
                    <div className="step-number">4</div>
                    <div className="step-content">
                      <h3>Repayment</h3>
                      <p>
                        Repay the loan in easy installments over the agreed period, building your credit history for
                        future financial needs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="about-section">
                <h2>Our Partners</h2>
                <div className="partners-grid">
                  <div className="partner-logo">
                    <img src="/images/partners/partner1.jpg" alt="Microfinance Partner" />
                  </div>
                  <div className="partner-logo">
                    <img src="/images/partners/partner2.jpg" alt="Banking Partner" />
                  </div>
                  <div className="partner-logo">
                    <img src="/images/partners/partner3.jpg" alt="Government Scheme" />
                  </div>
                  <div className="partner-logo">
                    <img src="/images/partners/partner4.jpg" alt="NGO Partner" />
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "apply" && (
            <div className="apply-content">
              {submitted ? (
                <div className="application-success">
                  <div className="success-icon">
                    <i className="fas fa-check-circle"></i>
                  </div>
                  <h2>Application Submitted Successfully!</h2>
                  <p>
                    Thank you for applying for a micro-loan with Karmasathi. Our team will review your application and
                    get back to you within 3-5 business days.
                  </p>
                  <p>
                    Your application reference number: <strong>ML-{Math.floor(Math.random() * 10000)}</strong>
                  </p>
                  <button
                    className="btn btn-primary"
                    onClick={() => {
                      setSubmitted(false)
                      setFormData({
                        name: "",
                        email: "",
                        phone: "",
                        address: "",
                        craftType: "",
                        loanAmount: "",
                        purpose: "",
                        repaymentPeriod: "6",
                        experience: "",
                        monthlyIncome: "",
                      })
                    }}
                  >
                    Submit Another Application
                  </button>
                </div>
              ) : (
                <>
                  <h2>Apply for a Micro-Loan</h2>
                  <p className="apply-intro">
                    Fill out the form below to apply for a micro-loan. Our team will review your application and get
                    back to you within 3-5 business days.
                  </p>

                  <form className="loan-application-form" onSubmit={handleSubmit}>
                    <div className="form-section">
                      <h3>Personal Information</h3>
                      <div className="form-grid">
                        <div className="form-group">
                          <label htmlFor="name">Full Name *</label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="email">Email Address *</label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="phone">Phone Number *</label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="address">Address *</label>
                          <textarea
                            id="address"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            required
                          ></textarea>
                        </div>
                      </div>
                    </div>

                    <div className="form-section">
                      <h3>Craft & Business Information</h3>
                      <div className="form-grid">
                        <div className="form-group">
                          <label htmlFor="craftType">Type of Craft *</label>
                          <select
                            id="craftType"
                            name="craftType"
                            value={formData.craftType}
                            onChange={handleChange}
                            required
                          >
                            <option value="">Select Craft Type</option>
                            <option value="Handloom">Handloom</option>
                            <option value="Pottery">Pottery</option>
                            <option value="Woodwork">Woodwork</option>
                            <option value="Bamboo Craft">Bamboo Craft</option>
                            <option value="Metal Craft">Metal Craft</option>
                            <option value="Painting">Painting</option>
                            <option value="Embroidery">Embroidery</option>
                            <option value="Jute Craft">Jute Craft</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>
                        <div className="form-group">
                          <label htmlFor="experience">Years of Experience *</label>
                          <input
                            type="number"
                            id="experience"
                            name="experience"
                            min="0"
                            value={formData.experience}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="monthlyIncome">Average Monthly Income (₹) *</label>
                          <input
                            type="number"
                            id="monthlyIncome"
                            name="monthlyIncome"
                            min="0"
                            value={formData.monthlyIncome}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <div className="form-section">
                      <h3>Loan Details</h3>
                      <div className="form-grid">
                        <div className="form-group">
                          <label htmlFor="loanAmount">Loan Amount (₹) *</label>
                          <input
                            type="number"
                            id="loanAmount"
                            name="loanAmount"
                            min="5000"
                            max="50000"
                            value={formData.loanAmount}
                            onChange={handleChange}
                            required
                          />
                          <small>Min: ₹5,000 - Max: ₹50,000</small>
                        </div>
                        <div className="form-group">
                          <label htmlFor="purpose">Purpose of Loan *</label>
                          <select id="purpose" name="purpose" value={formData.purpose} onChange={handleChange} required>
                            <option value="">Select Purpose</option>
                            <option value="Raw Materials">Raw Materials</option>
                            <option value="Tools & Equipment">Tools & Equipment</option>
                            <option value="Workshop Improvement">Workshop Improvement</option>
                            <option value="Marketing & Promotion">Marketing & Promotion</option>
                            <option value="Training & Skill Development">Training & Skill Development</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>
                        <div className="form-group">
                          <label htmlFor="repaymentPeriod">Repayment Period *</label>
                          <select
                            id="repaymentPeriod"
                            name="repaymentPeriod"
                            value={formData.repaymentPeriod}
                            onChange={handleChange}
                            required
                          >
                            <option value="3">3 months</option>
                            <option value="6">6 months</option>
                            <option value="9">9 months</option>
                            <option value="12">12 months</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="form-actions">
                      <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                        {isSubmitting ? "Submitting..." : "Submit Application"}
                      </button>
                    </div>
                  </form>
                </>
              )}
            </div>
          )}

          {activeTab === "success" && (
            <div className="success-content">
              <h2>Success Stories</h2>
              <p className="success-intro">
                Read inspiring stories of artisans who have transformed their lives and businesses with the help of
                Karmasathi's Micro-Loan Program.
              </p>

              <div className="success-stories">
                <div className="success-story">
                  <div className="story-image">
                    <img src="/images/success/story1.jpg" alt="Success Story" />
                  </div>
                  <div className="story-content">
                    <h3>Rupa Devi - Kantha Embroidery Artist</h3>
                    <p className="story-location">
                      <i className="fas fa-map-marker-alt"></i> Bolpur, West Bengal
                    </p>
                    <p className="story-text">
                      "I took a loan of ₹15,000 to buy better quality fabrics and threads for my Kantha work. Within six
                      months, I was able to create higher quality products that sold for twice the price. The loan
                      helped me increase my monthly income from ₹5,000 to ₹12,000, and I was able to repay it within the
                      agreed period. Now I'm planning to take another loan to expand my workshop and train other women
                      in my village."
                    </p>
                    <div className="story-stats">
                      <div className="stat">
                        <span className="stat-value">₹15,000</span>
                        <span className="stat-label">Loan Amount</span>
                      </div>
                      <div className="stat">
                        <span className="stat-value">140%</span>
                        <span className="stat-label">Income Increase</span>
                      </div>
                      <div className="stat">
                        <span className="stat-value">6</span>
                        <span className="stat-label">Months to Repay</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="success-story">
                  <div className="story-image">
                    <img src="/images/success/story2.jpg" alt="Success Story" />
                  </div>
                  <div className="story-content">
                    <h3>Manik Sarkar - Wooden Mask Carver</h3>
                    <p className="story-location">
                      <i className="fas fa-map-marker-alt"></i> Purulia, West Bengal
                    </p>
                    <p className="story-text">
                      "I had been using old, worn-out tools for my wooden mask carving, which limited the quality and
                      detail of my work. With a ₹20,000 loan from Karmasathi, I purchased a new set of carving tools and
                      a small machine to speed up the initial cutting process. This improved both the quality and
                      quantity of masks I could produce. I now supply to three handicraft stores in Kolkata and have
                      started receiving orders from tourists through the Karmasathi platform."
                    </p>
                    <div className="story-stats">
                      <div className="stat">
                        <span className="stat-value">₹20,000</span>
                        <span className="stat-label">Loan Amount</span>
                      </div>
                      <div className="stat">
                        <span className="stat-value">3x</span>
                        <span className="stat-label">Production Increase</span>
                      </div>
                      <div className="stat">
                        <span className="stat-value">9</span>
                        <span className="stat-label">Months to Repay</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="success-story">
                  <div className="story-image">
                    <img src="/images/success/story3.jpg" alt="Success Story" />
                  </div>
                  <div className="story-content">
                    <h3>Lakshmi Mondal - Patachitra Artist</h3>
                    <p className="story-location">
                      <i className="fas fa-map-marker-alt"></i> Nadia, West Bengal
                    </p>
                    <p className="story-text">
                      "I used to create Patachitra paintings only during festival seasons due to lack of funds for
                      materials. With a ₹10,000 loan, I was able to buy a year's supply of natural colors, fabrics, and
                      other materials. This allowed me to work throughout the year and experiment with new designs. I
                      also used part of the loan to attend a workshop on modern Patachitra techniques, which helped me
                      create contemporary designs that appeal to urban customers."
                    </p>
                    <div className="story-stats">
                      <div className="stat">
                        <span className="stat-value">₹10,000</span>
                        <span className="stat-label">Loan Amount</span>
                      </div>
                      <div className="stat">
                        <span className="stat-value">Year-round</span>
                        <span className="stat-label">Production</span>
                      </div>
                      <div className="stat">
                        <span className="stat-value">12</span>
                        <span className="stat-label">Months to Repay</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "faq" && (
            <div className="faq-content">
              <h2>Frequently Asked Questions</h2>
              <div className="faq-list">
                <div className="faq-item">
                  <div className="faq-question">
                    <h3>Who is eligible for a micro-loan?</h3>
                    <i className="fas fa-chevron-down"></i>
                  </div>
                  <div className="faq-answer">
                    <p>
                      Any artisan from West Bengal who has been practicing their craft for at least one year is eligible
                      to apply. You need to have a Karmasathi profile and at least 3 products listed on the platform.
                      There are no strict credit score requirements, as we use alternative methods to assess
                      creditworthiness.
                    </p>
                  </div>
                </div>

                <div className="faq-item">
                  <div className="faq-question">
                    <h3>What is the interest rate on micro-loans?</h3>
                    <i className="fas fa-chevron-down"></i>
                  </div>
                  <div className="faq-answer">
                    <p>
                      Our interest rates range from 4% to 8% per annum, depending on the loan amount and repayment
                      period. This is significantly lower than traditional microfinance institutions and banks. We are
                      able to offer these rates through partnerships with government schemes and social impact
                      investors.
                    </p>
                  </div>
                </div>

                <div className="faq-item">
                  <div className="faq-question">
                    <h3>How long does the application process take?</h3>
                    <i className="fas fa-chevron-down"></i>
                  </div>
                  <div className="faq-answer">
                    <p>
                      The application process typically takes 3-5 business days. Once approved, the loan amount is
                      disbursed within 2 business days. The entire process from application to disbursement usually
                      takes about a week.
                    </p>
                  </div>
                </div>

                <div className="faq-item">
                  <div className="faq-question">
                    <h3>What documents are required for the loan application?</h3>
                    <i className="fas fa-chevron-down"></i>
                  </div>
                  <div className="faq-answer">
                    <p>You will need to provide:</p>
                    <ul>
                      <li>Identity proof (Aadhaar card, voter ID, or PAN card)</li>
                      <li>Address proof (if different from identity proof)</li>
                      <li>Photographs of your craft and workshop</li>
                      <li>Bank account details for loan disbursement</li>
                      <li>Basic income and expense statement (we provide a simple template)</li>
                    </ul>
                  </div>
                </div>

                <div className="faq-item">
                  <div className="faq-question">
                    <h3>How do I repay the loan?</h3>
                    <i className="fas fa-chevron-down"></i>
                  </div>
                  <div className="faq-answer">
                    <p>Repayments can be made through multiple channels:</p>
                    <ul>
                      <li>Direct bank transfer</li>
                      <li>UPI payments</li>
                      <li>Automatic deduction from your Karmasathi sales (optional)</li>
                      <li>Through local microfinance partners</li>
                    </ul>
                    <p>You can choose to make weekly, bi-weekly, or monthly repayments based on your cash flow.</p>
                  </div>
                </div>

                <div className="faq-item">
                  <div className="faq-question">
                    <h3>What happens if I can't repay the loan on time?</h3>
                    <i className="fas fa-chevron-down"></i>
                  </div>
                  <div className="faq-answer">
                    <p>
                      We understand that artisans may face seasonal fluctuations in income. If you're facing
                      difficulties in repayment, please contact us as soon as possible. We can work out a revised
                      repayment plan or provide a grace period. We aim to support artisans, not burden them with debt.
                    </p>
                  </div>
                </div>

                <div className="faq-item">
                  <div className="faq-question">
                    <h3>Can I apply for another loan after repaying the first one?</h3>
                    <i className="fas fa-chevron-down"></i>
                  </div>
                  <div className="faq-answer">
                    <p>
                      Yes, artisans who successfully repay their loans are eligible for larger loan amounts in the
                      future. We reward good repayment behavior with better terms and higher loan limits.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default MicroLoan

