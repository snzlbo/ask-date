<template>
  <div
    class="flex flex-col w-full space-y-6 justify-center items-center h-screen bg-[#be185d]"
  >
    <button
      class="text-white border border-white text-sm px-4 py-2 text-center block mx-0.5 my-1 cursor-pointer rounded-xl absolute left-4 top-4"
      @click="navigateTo('/')"
    >
      < Say yes Again
    </button>
    <div class="container">
      <h1
        class="text-xl md:text-4xl font-bold text-white text-center md:mt-5 mb-0"
      >
        Congrats, you just signed on our very first official date 🥳
      </h1>
      <div class="flex justify-center align-center p-12">
        <img
          src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExZmNpZWN4enY0MTM1NGxnZXZ4dDJlOTVlZm55MnY3dGJjNXZmNmozMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/6p3FLwUj8rHc2ohf4Y/giphy.gif"
          alt="Cute animated illustration"
          class="max-w-[320px] md:max-w-[600px]"
        />
      </div>
    </div>
  </div>
</template>
