<template>
  <main
    class="flex min-h-screen flex-col items-center justify-center px-4 bg-gray-900 text-white"
  >
    <div
      class="w-full max-w-md text-center bg-gray-800 p-10 rounded-3xl border border-blue-500/30 shadow-2xl"
    >
      <div class="text-6xl mb-6">✅</div>
      <h1 class="text-3xl font-black mb-2 uppercase italic">
        Order Confirmed!
      </h1>
      <p class="text-gray-400 mb-8 italic">
        "Please head to the counter to pick up your order."
      </p>

      <button
        @click="$router.push('/')"
        class="w-full bg-blue-600 py-4 rounded-xl font-bold text-white hover:bg-blue-700 shadow-lg transition-all"
      >
        Finish & New Order
      </button>
    </div>
  </main>
</template>
