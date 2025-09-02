---
title: "STEMRider.xyz | Inspiring communities across Nigeria through STEM projects and adventures"
layout: "base.njk"
---


  <div class="px-40 flex flex-1 justify-center py-5">
          <div class="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div class="flex flex-wrap justify-between gap-3 p-4">
              <div class="flex min-w-72 flex-col gap-3">
                <p class="text-[#111418] tracking-light text-[32px] font-bold leading-tight">Projects</p>
                <p class="text-[#60758a] text-sm font-normal leading-normal">
                  Explore the exciting projects completed by STEMRider, showcasing the integration of STEM principles with real-world adventures.
                </p>
              </div>
            </div>
            <div class="flex flex-wrap gap-3 p-4 justify-start">
              {% for project in collections._projects %}
              <div class="flex flex-col gap-3 pb-3 w-[238px]">
                <div
                  class="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg"
                  style='background-image: url("{{project.data.cover}}");'
                ></div>
                <div>
                  <a href="{{project.url}}">
                  <p class="text-[#111418] text-base font-medium leading-normal">{{project.data.title}}</p>
                  <p class="text-[#60758a] text-sm font-normal leading-normal">{{project.data.preview}}</p>
                  </a>
                </div>
              </div>
              {% endfor %}
              <!-- <div class="flex flex-col gap-3 pb-3">
                <div
                  class="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg"
                  style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuDyF2Ha-9SXrSBt0iYNy9N_tctInG6CNpSPzU_DQeO4ybI-GuA2MXHoXNPcFUYW-5SBVM2zUn2z3fSIVDozEYF0c0RS_XSdP2fKtNLHn3fB2mqVjhBKxwo-azqSJ8ocAuwvb-wh5HIMFHjvcXP3WzVMu1kLemS1qfvm0GS_vYGiXKafJjXwDCE5Dqn54wQs3BgDouFjQT5PoILE2OjT3bfrI-oc0N1p7aJVLL-U2v3czVPwBsjZLz4ZqR4V_aCF9FFP0kTYs7QMTjk");'
                ></div>
                <div>
                  <p class="text-[#111418] text-base font-medium leading-normal">Environmental Monitoring</p>
                  <p class="text-[#60758a] text-sm font-normal leading-normal">Collecting and analyzing environmental data in diverse ecosystems.</p>
                </div>
              </div>
              <div class="flex flex-col gap-3 pb-3">
                <div
                  class="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg"
                  style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuDezY64XfypO1rj2eFAoeTnxRBbNYDg8N4cIRtw2xUPkF3LvzBwPfoXBgcwanzUH8PmeYRPt4Hluj6_1GmWFV2ipgEpkCxBRfXPXJDvKpVwrQ03L6-sBUoKKosUA_wp_00NJ7YQ-ecK_HtMkNTuOb15G_zwgERjfTz81aXeIm50cixo5n3pfEfRE2u1MUO_tsXGXhdJRLxZQCCEaZyr9WEJuPAs_zabCr6STmZsxcegcXrT1yWgLhJKCIYD936CY7fsuuvBXqTIfAU");'
                ></div>
                <div>
                  <p class="text-[#111418] text-base font-medium leading-normal">Renewable Energy Solutions</p>
                  <p class="text-[#60758a] text-sm font-normal leading-normal">Designing and implementing renewable energy systems.</p>
                </div>
              </div>
              <div class="flex flex-col gap-3 pb-3">
                <div
                  class="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg"
                  style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuBvJCYZZY_0N4xX9HKRMuEITX7JPp-XFv7QKO2opnErTKEm6VXLaZQiF23gKeFcCynAr1wrYXF6_2UAuQCHGDE3FFq3U0QDSIgBMcon8M-QX9SHOv6ZZRLhNKvPN7HbLgo0ds961MrouoI0LgTaxA48j4mp4Kni3dIvtzV-AOcA_CcSBPAwXuNTkQhL4AjyWuSzNr29zvEOBOddtVsB2Cj8DTvLgOiVdStnDROXWUomY_Ao6qXmSJTbfi14XEhlkOy9XwmwPCB_dx4");'
                ></div>
                <div>
                  <p class="text-[#111418] text-base font-medium leading-normal">Space Exploration Mission</p>
                  <p class="text-[#60758a] text-sm font-normal leading-normal">Developing technologies for space exploration and research.</p>
                </div>
              </div>
              <div class="flex flex-col gap-3 pb-3">
                <div
                  class="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg"
                  style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuDO5X_uT9rTc5BJm52jqry8MSjx4Jrvaun-JXpyh8jS3hZ59HH2Mxt7JU0sezZT3uFLSA1EHKEWXM4eG54iepurRVTe6najbNanhbWDdDRNBg9FxZBELXyLeEdcmLzJ9axktBsYv6MJdrmM6C_KSiaA-w4HecNcBY4AsTzqHi7cF4FkWQ-1HAMVIOOJXNg1qizTSGYWzAADNqAiAt5tZ8ViIlAT5MDtHd9YlzT-MPnho4bqTqWwxXmXYkwmaEHX6iWSEeRZPtMKKgE");'
                ></div>
                <div>
                  <p class="text-[#111418] text-base font-medium leading-normal">Sustainable Agriculture Project</p>
                  <p class="text-[#60758a] text-sm font-normal leading-normal">Creating sustainable farming practices using innovative technologies.</p>
                </div>
              </div>
              <div class="flex flex-col gap-3 pb-3">
                <div
                  class="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg"
                  style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuBKdURlUHSp_45NPjoi6lpa2PitoBGdUVeulqtXun6mr35bntrfRzhSVO9UkjxrxzFeFaOH6uZ-zLs8Gt56saQQObRfQmR20HdUZWyMcaEwvJa5h8Awkae4ctByVXI1E7A-WXWjwI-GiM8wsdf4Bcjjvid4VAkOegKJpjNfbJJQEOF0Rj4L08bZs988cnX6i4klxs83hhNkdevOdimQy4Fm-2fgWkmbB7K_hM05zgszumBYTk4rmRJeHANO9hKg99BAEJR1w7jhQgU");'
                ></div>
                <div>
                  <p class="text-[#111418] text-base font-medium leading-normal">Oceanography Expedition</p>
                  <p class="text-[#60758a] text-sm font-normal leading-normal">Exploring and studying marine life and ocean environments.</p>
                </div>
              </div> -->
            </div>
          </div>
        </div>