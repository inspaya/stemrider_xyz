---
title: "STEMRider.xyz | Inspiring communities across Nigeria through STEM projects and adventures"
layout: "base.njk"
---


<div class="px-40 flex flex-1 justify-center py-5">
          <div class="layout-content-container flex flex-col w-[512px] max-w-[512px] py-5 max-w-[960px] flex-1">
            <div class="flex flex-wrap justify-between gap-3 p-4">
              <div class="flex min-w-72 flex-col gap-3">
                <p class="text-[#111418] tracking-light text-[32px] font-bold leading-tight">Get in Touch</p>
                <p class="text-[#60758a] text-sm font-normal leading-normal">
                  We'd love to hear from you! Whether you have questions about our programs, want to collaborate, or just want to say hello, please reach out using the form below
                  or connect with us on social media.
                </p>
              </div>
            </div>
            <form action="https://formspree.io/f/mwpnvarg" method="POST" class="space-y-4">
              <div class="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                <label class="flex flex-col min-w-40 flex-1">
                  <p class="text-[#111418] text-base font-medium leading-normal pb-2">Your Name</p>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111418] focus:outline-0 focus:ring-0 border-none bg-[#f0f2f5] focus:border-none h-14 placeholder:text-[#60758a] p-4 text-base font-normal leading-normal"
                    required
                  />
                </label>
              </div>
              <div class="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                <label class="flex flex-col min-w-40 flex-1">
                  <p class="text-[#111418] text-base font-medium leading-normal pb-2">Your Email</p>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111418] focus:outline-0 focus:ring-0 border-none bg-[#f0f2f5] focus:border-none h-14 placeholder:text-[#60758a] p-4 text-base font-normal leading-normal"
                    required
                  />
                </label>
              </div>
              <div class="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                <label class="flex flex-col min-w-40 flex-1">
                  <p class="text-[#111418] text-base font-medium leading-normal pb-2">Type of Message (optional)</p>
                  <select
                    name="type"
                    class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111418] focus:outline-0 focus:ring-0 border-none bg-[#f0f2f5] focus:border-none h-14 p-4 text-base font-normal leading-normal"
                  >
                    <option value="">Select type</option>
                    <option value="Sponsorship">Sponsorship</option>
                    <option value="Volunteer">Volunteer</option>
                    <option value="Donation">Donation</option>
                    <option value="Other Enquiry">Other Enquiry</option>
                  </select>
                </label>
              </div>
              <div class="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                <label class="flex flex-col min-w-40 flex-1">
                  <p class="text-[#111418] text-base font-medium leading-normal pb-2">Subject</p>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Enter the subject"
                    class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111418] focus:outline-0 focus:ring-0 border-none bg-[#f0f2f5] focus:border-none h-14 placeholder:text-[#60758a] p-4 text-base font-normal leading-normal"
                    required
                  />
                </label>
              </div>
              <div class="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                <label class="flex flex-col min-w-40 flex-1">
                  <p class="text-[#111418] text-base font-medium leading-normal pb-2">Your Message</p>
                  <textarea
                    name="message"
                    placeholder="Enter your message"
                    class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111418] focus:outline-0 focus:ring-0 border-none bg-[#f0f2f5] focus:border-none min-h-36 placeholder:text-[#60758a] p-4 text-base font-normal leading-normal"
                    required
                  ></textarea>
                </label>
              </div>
              <div class="flex px-4 py-3">
                <button
                  type="submit"
                  class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 flex-1 bg-[#0d80f2] text-white text-sm font-bold leading-normal tracking-[0.015em]"
                >
                  <span class="truncate">Send Message</span>
                </button>
                <script>
                  document.addEventListener('DOMContentLoaded', function() {
                    var form = document.querySelector('form[action="https://formspree.io/f/mwpnvarg"]');
                    if (form) {
                      form.addEventListener('submit', function(e) {
                        e.preventDefault();
                        var data = new FormData(form);
                        fetch(form.action, {
                          method: 'POST',
                          body: data,
                          headers: {
                            'Accept': 'application/json'
                          }
                        }).then(function(response) {
                          if (response.ok) {
                            form.style.display = 'none';
                          } else {
                            response.json().then(function(data) {
                              alert(data.error || 'Oops! There was a problem submitting your form.');
                            });
                          }
                        }).catch(function(error) {
                          alert('Oops! There was a problem submitting your form.');
                        });
                      });
                    }
                  });
                </script>
              </div>
            </form>
            <h3 class="text-[#111418] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Other Ways to Connect</h3>
            <div class="@container">
              <div class="gap-2 px-4 flex flex-wrap justify-start">
                <!-- <div class="flex flex-col items-center gap-2 bg-white py-2.5 text-center w-20">
                  <div class="rounded-full bg-[#f0f2f5] p-2.5">
                    <div class="text-[#111418]" data-icon="TwitterLogo" data-size="20px" data-weight="regular">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                        <path
                          d="M247.39,68.94A8,8,0,0,0,240,64H209.57A48.66,48.66,0,0,0,168.1,40a46.91,46.91,0,0,0-33.75,13.7A47.9,47.9,0,0,0,120,88v6.09C79.74,83.47,46.81,50.72,46.46,50.37a8,8,0,0,0-13.65,4.92c-4.31,47.79,9.57,79.77,22,98.18a110.93,110.93,0,0,0,21.88,24.2c-15.23,17.53-39.21,26.74-39.47,26.84a8,8,0,0,0-3.85,11.93c.75,1.12,3.75,5.05,11.08,8.72C53.51,229.7,65.48,232,80,232c70.67,0,129.72-54.42,135.75-124.44l29.91-29.9A8,8,0,0,0,247.39,68.94Zm-45,29.41a8,8,0,0,0-2.32,5.14C196,166.58,143.28,216,80,216c-10.56,0-18-1.4-23.22-3.08,11.51-6.25,27.56-17,37.88-32.48A8,8,0,0,0,92,169.08c-.47-.27-43.91-26.34-44-96,16,13,45.25,33.17,78.67,38.79A8,8,0,0,0,136,104V88a32,32,0,0,1,9.6-22.92A30.94,30.94,0,0,1,167.9,56c12.66.16,24.49,7.88,29.44,19.21A8,8,0,0,0,204.67,80h16Z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <p class="text-[#111418] text-sm font-medium leading-normal">Twitter</p>
                </div> -->
                <div class="flex flex-col items-center gap-2 bg-white py-2.5 text-center w-20">
                  <div class="rounded-full bg-[#f0f2f5] p-2.5">
                    <a href="https://instagram.com/istemlabsafricaig">
                    <div class="text-[#111418]" data-icon="InstagramLogo" data-size="20px" data-weight="regular">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                        <path
                          d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <p class="text-[#111418] text-sm font-medium leading-normal">Instagram</p>
                  </a>
                </div>
                <!-- <div class="flex flex-col items-center gap-2 bg-white py-2.5 text-center w-20">
                  <div class="rounded-full bg-[#f0f2f5] p-2.5">
                    <div class="text-[#111418]" data-icon="FacebookLogo" data-size="20px" data-weight="regular">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                        <path
                          d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm8,191.63V152h24a8,8,0,0,0,0-16H136V112a16,16,0,0,1,16-16h16a8,8,0,0,0,0-16H152a32,32,0,0,0-32,32v24H96a8,8,0,0,0,0,16h24v63.63a88,88,0,1,1,16,0Z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <p class="text-[#111418] text-sm font-medium leading-normal">Facebook</p>
                </div> -->
              </div>
            </div>
          </div>
        </div>