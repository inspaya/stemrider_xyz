---
title: "STEMRider.xyz | Inspiring communities across Nigeria through STEM projects and adventures"
layout: "base.njk"
---



<div class="px-40 flex flex-1 justify-center py-5">
        <div class="layout-content-container flex flex-col max-w-[960px] flex-1">
          <div class="flex flex-wrap justify-between gap-3 p-4">
            <p class="text-[#111418] tracking-light text-[32px] font-bold leading-tight min-w-72">Resources</p>
          </div>
          <h2 class="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">No Learner Left Behind!</h2>
          <p class="text-[#111418] text-base font-normal leading-normal pb-3 pt-1 px-4">
            Explore our collection of downloadable resources designed to enhance your STEM learning experience. From
            engaging comics to hands-on DIY manuals and comprehensive
            worksheets, we offer a variety of materials for both youth and educators. Most of our resources are available for FREE.
          </p>
          <div class="flex flex-wrap gap-3 p-4 justify-start">
            {% assign latestComicArray = collections._comics | slice: 0, 1 %}
              {% for comic in latestComicArray %}
            <div class="flex flex-col gap-3 pb-3 w-[258px]">
              <div class="w-full bg-center bg-no-repeat aspect-[3/4] bg-cover rounded-lg"
                style='background-image: url("{{comic.data.cover}}");'>
              </div>
              <div>
                <a href="{{comic.url}}">
                  <p class="text-[#111418] text-base font-medium leading-normal">Comic Book Series: {{comic.data.title}}</p>
                  <p class="text-[#60758a] text-sm font-normal leading-normal">{{comic.data.description}}</p>
                </a>
              </div>
            </div>
            {% endfor %}
            {% assign latestManualArray = collections._manuals | slice: 0, 1 %}
              {% for manual in latestManualArray %}
            <div class="flex flex-col gap-3 pb-3 w-[258px]">
              <div class="w-full bg-center bg-no-repeat aspect-[3/4] bg-cover rounded-lg"
                style='background-image: url("{{manual.data.cover}}");'>
              </div>
              <div>
                <a href="{{manual.url}}">
                  <p class="text-[#111418] text-base font-medium leading-normal">DIY Manual: {{manual.data.title}}</p>
                  <p class="text-[#60758a] text-sm font-normal leading-normal">{{manual.data.preview}}</p>
                </a>
              </div>
            </div>
            {% endfor %}
            {% assign latestWorkSheet = collections._worksheets | slice: 0, 1 %}
              {% for worksheet in latestWorkSheet %}
            <div class="flex flex-col gap-3 pb-3 w-[258px]">
              <div class="w-full bg-center bg-no-repeat aspect-[3/4] bg-cover rounded-lg"
                style='background-image: url("{{worksheet.data.cover}}");'>
              </div>
              <div>
                <a href="#"><!--{{worksheet.url}}-->
                  <p class="text-[#111418] text-base font-medium leading-normal">STEM Knowledge Pack: {{worksheet.data.title}}</p>
                  <p class="text-[#60758a] text-sm font-normal leading-normal">{{worksheet.data.preview}}</p>
                </a>
              </div>
            </div>
            {% endfor %}
          </div>
          <div class="flex px-4 py-3 justify-center">
            <button
              class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#f0f2f5] text-[#111418] text-sm font-bold leading-normal tracking-[0.015em]">
              <span class="truncate">View All Resources</span>
            </button>
          </div>
          <!-- BEGIN Educator Resources -->
          <!-- <div class="px-40 flex flex-1 justify-center py-5"> -->
          <div class="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div class="layout-content-container flex flex-col max-w-[960px] flex-1">
              <div class="flex flex-wrap justify-between gap-3 p-4">
                <div class="flex min-w-72 flex-col gap-3">
                  <!-- <p class="text-[#111418] tracking-light text-[32px] font-bold leading-tight">-->
                  <h2 class="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] pb-3 pt-5">For
                    Educators/Parents</h2>
                  <p class="text-[#60758a] text-sm font-normal leading-normal">
                    Enhance your teaching with STEMRider's educational materials, designed to bring adventure and STEM
                    learning into your classroom.
                  </p>
                </div>
              </div>
              <h3 class="text-[#111418] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Lesson Plans
              </h3>
              <div class="flex flex-wrap gap-1 py-4 justify-start">
                <div class="flex flex-col gap-3 p-4 w-[228px] rounded-lg border border-[#dbe0e6]">
                  <div class="bg-center bg-no-repeat aspect-square bg-cover rounded-lg w-10 shrink-0"
                    style='background-image: url("/assets/cards/lesson_plans_science.png");'>
                  </div>
                  <div class="flex flex-col gap-1">
                    <a href="#">
                      <h2 class="text-[#111418] text-base font-bold leading-tight">Coming Soon</h2>
                      <p class="text-[#60758a] text-sm font-normal leading-normal">Detailed Lesson Plans you can use for your classroom. Available soon</p>
                    </a>
                  </div>
                </div>           
              </div>
              <!-- <div class="flex flex-wrap gap-1 py-4 justify-start">-->
              {% comment %}                              
              {% for plan in collections._lessons %}
                <div class="flex flex-col gap-3 p-4 w-[228px] rounded-lg border border-[#dbe0e6]">
                  <div class="bg-center bg-no-repeat aspect-square bg-cover rounded-lg w-10 shrink-0"
                    style='background-image: url("{{plan.data.cover}}");'>
                  </div>
                  <div class="flex flex-col gap-1">
                    <a href="{{plan.url}}">
                      <h2 class="text-[#111418] text-base font-bold leading-tight">{{plan.data.title}}</h2>
                      <p class="text-[#60758a] text-sm font-normal leading-normal">{{plan.data.preview}}</p>
                    </a>
                  </div>
                </div>
              {% endfor %}
              {% endcomment %}            
              <!-- </div> -->
              <h3 class="text-[#111418] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">STEMRider
                Activities</h3>
                <div class="flex flex-wrap gap-1 py-4 justify-start">
                <div class="flex flex-col gap-3 p-4 w-[228px] rounded-lg border border-[#dbe0e6]">
                  <div class="bg-center bg-no-repeat aspect-square bg-cover rounded-lg w-10 shrink-0"
                    style='background-image: url("/assets/cards/mountains.png");'>
                  </div>
                  <div class="flex flex-col gap-1">
                    <a href="#">
                      <h2 class="text-[#111418] text-base font-bold leading-tight">Hands-On Activities</h2>
                      <p class="text-[#60758a] text-sm font-normal leading-normal">Interactive hands-on activities for schools/communities</p>
                    </a>
                  </div>
                </div>            
              </div>
              <!-- <div class="flex flex-wrap gap-1 py-4 justify-start">-->
              {% comment %}
              {% for activity in collections._activities %}
                <div class="flex flex-col gap-3 p-4 w-[228px] rounded-lg border border-[#dbe0e6]">
                  <div class="bg-center bg-no-repeat aspect-square bg-cover rounded-lg w-10 shrink-0"
                    style='background-image: url("{{activity.data.cover}}");'>
                  </div>
                  <div class="flex flex-col gap-1">
                    <a href="{{activity.url}}">
                      <h2 class="text-[#111418] text-base font-bold leading-tight">{{activity.data.title}}</h2>
                      <p class="text-[#60758a] text-sm font-normal leading-normal">{{activity.data.preview}}</p>
                    </a>
                  </div>
                </div>
              {% endfor %}
              {% endcomment %}         
              <!-- </div> -->
                          </div>
          </div>
          <!-- END Educator Resources -->
        </div>
        </div>