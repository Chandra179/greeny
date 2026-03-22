const REDWOOD_IMG = 'https://lh3.googleusercontent.com/aida-public/AB6AXuD5QtNHcMjtU6C9hNC3NjBABTKLyKtL6avr3_If-AGQoiLEg88iWVhvq4b8WYFaVK_cubJ7Y_uyboLf_L-n1y9hWLODRkdhrHyz4SZq80BUHd2lcxmyZyqXng7TpHtcstAIDLA1KnBEDki1hx2Z2nCPxxao_hVG94voDXmtBbtOxbw40d_SbL63KN4hbKE61aQh6Xqc2tFH_hXPRYbeqnBNSfIMpkaXRYLJlJ4OypHHVYERMlqR_sEo4qXRYmovITERjW4WDklINH8'
const OAK_IMG    = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCmX5RLaxAK03Jhws6pnUbYUXm7P3bFI9xQFdl-Ua_ZehOPqOglxVm6l5IUaMjgyRocEGD_oBs3CtiC15WulTC6sIbyakPfA3PoJfSyGiU52tznYhW5aSopXphh6SfzPRA4UOGgiE9sHDxC1YmsocfzqUVjPVHVmFIlbxSWo1-LkAy-YkRwKNFvCUZ2nLuU1mIs8soWLAeETuVdtXQ9o4bt8PcME57LYD90kcEEHRBEg8g4mNpz1xuYy-wZPyi2k3GbK2CaAfiRYDQ'
const PINE_IMG   = 'https://lh3.googleusercontent.com/aida-public/AB6AXuD0O4j-fHttjmImfdjS4zReBaYDPoq9piFyu4eErKj0QndfRat4uuKdXcMvj-_2_6U_sCYe63HmaHq1Jn0YfYhyZSklialsgdbO9waRPntzJYqNVQgtAJiNgpvAH7WT4kg0mc4XIiFViJoeOX-00CfBQGRmIjAtrRKS3fl2hhO2k0H1rq46jcoSSgMXg3WbH_Mjt2Krk2opdTStMqxAcyH6XVpkgc2D6RZ3Jh3UT_fO1dy7exIy6rus7RnKP5e75Gav8HR4o9dfCCk'

function LivingGiantsSection() {
  return (
    <section class="py-20 md:py-32 px-6 md:px-8 max-w-screen-2xl mx-auto bg-surface">
      {/* Header */}
      <div class="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-16 gap-4">
        <div>
          <span class="text-secondary font-bold tracking-widest uppercase text-xs mb-2 block">Field Guide</span>
          <h2 class="text-4xl md:text-6xl text-primary font-headline font-light">Our Living Giants</h2>
        </div>
        <p class="text-on-surface-variant max-w-md font-body leading-relaxed">
          Documenting the oldest life forms on Earth. Each tree holds a century of whispers within its rings.
        </p>
      </div>

      {/* Bento Grid */}
      <div class="grid grid-cols-1 md:grid-cols-12 gap-6 md:h-[800px]">
        {/* Main Featured Card */}
        <div class="md:col-span-8 group relative overflow-hidden rounded-[2rem] bg-surface-container-low min-h-[400px] md:min-h-0">
          <img
            alt="Ancient giant redwood tree in thick fog"
            class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            src={REDWOOD_IMG}
          />
          <div class="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent flex flex-col justify-end p-8 md:p-12">
            <span class="text-emerald-300 font-bold text-sm mb-2">Sequoia sempervirens</span>
            <h3 class="text-white text-3xl md:text-4xl font-headline italic">The Silent Sentinel</h3>
            <p class="text-emerald-50/80 mt-4 max-w-sm">
              Standing for over 1,200 years in the heart of the Pacific Northwest.
            </p>
          </div>
        </div>

        {/* Side Stacked Cards */}
        <div class="md:col-span-4 grid grid-cols-2 md:grid-cols-1 grid-rows-1 md:grid-rows-2 gap-6">
          <div class="group relative overflow-hidden rounded-[2rem] bg-surface-container-low min-h-[200px] md:min-h-0">
            <img
              alt="Old oak tree with gnarled branches"
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              src={OAK_IMG}
            />
            <div class="absolute inset-0 bg-primary/20 group-hover:bg-primary/10 transition-colors" />
            <div class="absolute bottom-6 left-6 right-6">
              <h3 class="text-white text-xl md:text-2xl font-headline">Gnarled Wisdom</h3>
            </div>
          </div>
          <div class="group relative overflow-hidden rounded-[2rem] bg-surface-container-low min-h-[200px] md:min-h-0">
            <img
              alt="Ancient pine forest covered in moss"
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              src={PINE_IMG}
            />
            <div class="absolute inset-0 bg-primary/20 group-hover:bg-primary/10 transition-colors" />
            <div class="absolute bottom-6 left-6 right-6">
              <h3 class="text-white text-xl md:text-2xl font-headline">The Moss Blanket</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LivingGiantsSection
