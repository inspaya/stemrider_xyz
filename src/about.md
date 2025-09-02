---
title: "STEMRider.xyz | Inspiring communities across Nigeria through STEM projects and adventures"
layout: "base.njk"
---


<div class="px-40 flex flex-1 justify-center py-5">
    <div class="layout-content-container flex flex-col max-w-[960px] flex-1">
        <div class="@container">
            <div class="@[480px]:p-4">
                <div class="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-lg items-center justify-center p-4"
                    style='background-image: linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("/assets/rider_on_metallic_red_suzuki.svg");'>
                    <div class="flex flex-col gap-2 text-center">
                        <h1
                            class="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
                            About, Journey and Gear
                        </h1>
                        <h2
                            class="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                            Follow STEMRider's adventures across Nigeria, exploring science, technology, engineering,
                            and mathematics in action.
                        </h2>
                    </div>
                </div>
            </div>
        </div>
        <h2 class="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">STEMRider's
            Adventures</h2>
        <div class="grid grid-cols-[40px_1fr] gap-x-2 px-4">
            <div class="flex flex-col items-center gap-1 pt-3">
                <div class="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-6"
                    style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuCxmqTzc4NnrhpeTITVgxwF1sC-jtTRjXNGiPq4SnH9XXGnDWw3VvP6OzRMlbVGPfl4hz3Xi6JGRp5BDrWkdljO--Q-OVW6ryDkaobLEsHd8Vhyplqjv_zWct4bXtnZTlmBuuxOaOc7zq24mrkh7v-L0s3CvprJNtMtjKwrsEJMCavCycvrE638NdMcNiwssIKcTaGGDrMH6PevC6yNEOQ2E91rZvonf9iS_gkuR7x_SWTZQjdmcMrHHNaxA3UTKqODdw4lnvh1daQ");'>
                </div>
                <div class="w-[1.5px] bg-[#dbe0e6] h-2 grow"></div>
            </div>
            <div class="flex flex-1 flex-col py-3">
                <p class="text-[#111418] text-base font-medium leading-normal">STEMRider's journey commences soon
                    (follow journey on the map below)</p>
                <p class="text-[#60758a] text-base font-normal leading-normal">2025</p>
            </div>
            <!-- <div class="flex flex-col items-center gap-1">
                <div class="w-[1.5px] bg-[#dbe0e6] h-2"></div>
                <div
                  class="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-6"
                  style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuAznoKLHp9JJEPEFTt1tLR_LyiIJfEprjpGcG12wk6kV6RLfCLhy6J_jyUi-mPf7byRVd4ZU2OqthDtCmhm70TleozpDBN6siY8lEyKeDYHjuLBz-IHlIy3lWNBpghQ2pcVDqr094GcU-vtU3Mfga7y-ylyFmSBThuyZ0dVGpKjAgIiWsVu5HPVD3AOp1WLdHk1_t3OL4Pw1F4pU-dFgh9Ym3nSRCRvFqlVWS1RAS9BEvlrj5ywSUfZygXcd8OEa-J2CDiN95T8TA4");'
                ></div>
                <div class="w-[1.5px] bg-[#dbe0e6] h-2 grow"></div>
              </div> -->
            <!-- <div class="flex flex-1 flex-col py-3">
                <p class="text-[#111418] text-base font-medium leading-normal">Exploring the Tech Hubs of Silicon Valley</p>
                <p class="text-[#60758a] text-base font-normal leading-normal">2025</p>
              </div> -->
            <!-- <div class="flex flex-col items-center gap-1 pb-3">
                <div class="w-[1.5px] bg-[#dbe0e6] h-2"></div>
                <div
                  class="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-6"
                  style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuAmzfXrweiQ6NLr0DzWzbuycd-TyKYJsKXhtsOL2E3tZclSfPyjofij0WUAr5fA8Ez194rFGgXMi8ybktzsVME4lxkvhm6rdEcYzSsO98pke2rTZYHqoEPWmsoIbH7At8vmbW0CwWyIrlZ3qDN3cOAUi2OMEybGlsSKf6DRFmufqWHQ_mdAhsCcDt_hHOQusegDzBMfmC9arWPqTBrcQVrncdmnFffsYCbrrpG5A4PaOh7ZrALqkOGvQgZYnSG77x0sbunpmsTFjRM");'
                ></div>
              </div> -->
            <!-- <div class="flex flex-1 flex-col py-3">
                <p class="text-[#111418] text-base font-medium leading-normal">Journey Through the National Parks</p>
                <p class="text-[#60758a] text-base font-normal leading-normal">2025</p>
              </div> -->
        </div>
        <div>
            <div id="map" style="height: 400px; width: 100%; border-radius: 12px; margin-bottom: 2rem;"></div>
                            <script>
                                document.addEventListener('DOMContentLoaded', function() {
                                    var map = L.map('map').setView([9.0578, 7.49508], 12); // Abuja, Nigeria
                                    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                                        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                    }).addTo(map);
                                    // Example marker (Abuja)
                                    L.marker([9.0578, 7.49508]).addTo(map)
                                        .bindPopup('STEMRider starts here!')
                                        .openPopup();
                                });
                            </script>
        </div>
        <h2 class="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">STEMRider's
            Gear</h2>
        <div class="p-4">
            <div class="flex items-stretch justify-between gap-4 rounded-lg">
                <div class="flex flex-col gap-1 flex-[2_2_0px]">
                    <p class="text-[#111418] text-base font-bold leading-tight">Helmet, Jacket, Sportsbike and more</p>
                    <p class="text-[#60758a] text-sm font-normal leading-normal">Learn more about the STEMRider's equipment. Details coming soon</p>
                </div>
                <div class="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg flex-1"
                    style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuC3XRO78hi0aWtMQKwx4ruy2_80nXo2AeeRSc5p2LKsZNXxjbIUA96Lbx-2_6uAAzFMXg1bDG41VwSzhWwAUeVPb_AruHTNa1FWHpv_0y2LfOPJgHNIJqyn68KFEtPJcU0VMYOk7xiuUQ2v2fBv3ydqw14HdHNpoxZF8W8EFz5QfoHqTzRXDVb9gFiN-o3EAKCGb4MDBrBtaOQCGZJq1Bs4D6JYbu7cVRfRamYyETOVvyh1qQe0scimTcJ-beHrddJ7UySrC5Pa2Uw");'>
                </div>
            </div>
        </div>
        <!-- <div class="p-4">
            <div class="flex items-stretch justify-between gap-4 rounded-lg">
                <div class="flex flex-col gap-1 flex-[2_2_0px]">
                    <p class="text-[#111418] text-base font-bold leading-tight">Custom Motorcycle Jacket and Pants</p>
                    <p class="text-[#60758a] text-sm font-normal leading-normal">Designed for both style and
                        functionality, featuring 'STEMRider' branding.</p>
                </div>
                <div class="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg flex-1"
                    style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuA9qRGx2TerMdf-etm5vlzNU2UCaOzzV7IKVTEdWZpF9qjJoqP3v9kObfKALRjAxjdoE4N6Uyuzp8LjFW-EwkSpzDQG7QR-BS815D8YcvCnIcY8y8-Jsl6fAagMggTwjuLy5rc3XDScsR7ZlMtHrbBhXA2Cu4Vl3GJNST-oXGpykRbcyxMl_rRiwpVsutliT2qLcYDZpn3pZbaCWQrGTyp3L9NxF0JRKhhTYtRs__V5ZpnGQoTwXhKK3U9DLHnh6yOMta5Fotc2ik0");'>
                </div>
            </div>
        </div>
        <div class="p-4">
            <div class="flex items-stretch justify-between gap-4 rounded-lg">
                <div class="flex flex-col gap-1 flex-[2_2_0px]">
                    <p class="text-[#111418] text-base font-bold leading-tight">2025 Suzuki GSX 250R ABS Sportsbike</p>
                    <p class="text-[#60758a] text-sm font-normal leading-normal">
                        The ultimate companion for STEM-focused expeditions, combining sleek design with advanced
                        features.
                    </p>
                </div>
                <div class="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg flex-1"
                    style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuC3XRO78hi0aWtMQKwx4ruy2_80nXo2AeeRSc5p2LKsZNXxjbIUA96Lbx-2_6uAAzFMXg1bDG41VwSzhWwAUeVPb_AruHTNa1FWHpv_0y2LfOPJgHNIJqyn68KFEtPJcU0VMYOk7xiuUQ2v2fBv3ydqw14HdHNpoxZF8W8EFz5QfoHqTzRXDVb9gFiN-o3EAKCGb4MDBrBtaOQCGZJq1Bs4D6JYbu7cVRfRamYyETOVvyh1qQe0scimTcJ-beHrddJ7UySrC5Pa2Uw");'>
                </div>
            </div>
        </div> -->
    </div>
</div>