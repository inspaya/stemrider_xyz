---
title: "STEMRider.xyz | Inspiring communities across Nigeria through STEM projects and adventures"
layout: "base.njk"
---


<div class="px-40 flex flex-1 justify-center py-5">
          <div class="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div class="flex flex-wrap justify-between gap-3 p-4">
              <div class="flex min-w-72 flex-col gap-3">
                <p class="text-[#111418] tracking-light text-[32px] font-bold leading-tight">Comic Book Series </p>
                <p class="text-[#60758a] text-sm font-normal leading-normal">Welcome to our digital comic library! You can read abridged copies of our comics for FREE, perfect for quick reads and engaging STEM learning. If you would like to order a print version, please visit our <a href="#">Shop</a></p>
              </div>
            </div>
            <div class="flex flex-wrap gap-3 p-4 justify-start">
              {% for comic in collections._comics %}
                <div class="flex flex-col gap-3 pb-3 w-[188px]">
                <div
                  class="w-full bg-center bg-no-repeat aspect-[3/4] bg-cover rounded-lg"
                  style='background-image: url("{{comic.data.cover}}");'
                ></div>
                <div>
                  <a href="{{comic.url}}">
                  <p class="text-[#111418] text-base font-medium leading-normal">{{comic.data.title}}</p>
                  <p class="text-[#60758a] text-sm font-normal leading-normal">{{comic.data.description}}</p>
                  </a>
                </div>
              </div>
              {% endfor %}
            </div>
          </div>
        </div>