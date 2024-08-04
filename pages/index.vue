<template>
  <div
    class="flex flex-col space-y-6 justify-center items-center h-screen bg-[#be185d]"
  >
    <div class="px-4">
      <h1
        class="text-xl md:text-4xl font-bold text-white text-center md:mt-5 mb-2"
      >
        Would you be my date for a magical evening on the 6th of August? 🌸
      </h1>
    </div>
    <div class="flex justify-center align-center p-12">
      <img
        src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNTRuczY0ZGZ1dDZuYmtxcG54a3IwZjFyb2RjN2ptOGhkczJndXpqeiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/mpu7L6b0oRy0KOuyd7/giphy.gif"
        alt="Cute animated illustration"
        class="aspect-auto"
      />
    </div>
    <div class="buttons">
      <button
        class="bg-white text-red-400 px-6 py-3 md:px-8 md:py-4 text-center block mx-0.5 my-1 cursor-pointer rounded-xl absolute mr-[150px]"
        id="yesButton"
        @click="navigateTo('/yes')"
      >
        Yes
      </button>
      <button
        class="bg-white text-red-400 px-6 py-3 md:px-8 md:py-4 text-center block mx-0.5 my-1 cursor-pointer rounded-xl absolute ml-[150px]"
        id="noButton"
        @mouseover="moveButton"
        @click="moveButton"
      >
        No
      </button>
    </div>
  </div>
</template>

<script setup>
const nextPage = () => {
  window.location.href = "yes.html";
};

const moveButton = () => {
  const noButton = document.getElementById("noButton");
  const maxX = window.innerWidth - noButton.offsetWidth;
  const maxY = window.innerHeight - noButton.offsetHeight;
  const x = Math.random() * maxX;
  const y = Math.random() * maxY;
  noButton.style.left = `${x}px`;
  noButton.style.top = `${y}px`;
};
</script>

<style scoped>
#noButton {
  transition: 0.5s;
}

.buttons {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-left: 20px;
}

@media only screen and (max-width: 320px) and (max-height: 568px) {
  body {
    height: 100vh;
  }

  .header_text {
    font-size: 20px;
  }

  img {
    height: 60vh;
  }

  .btn {
    padding: 10px 18px;
    font-size: 12px;
  }
}

@media only screen and (max-width: 414px) and (max-height: 736px) {
  body {
    height: 90vh;
  }

  .header_text {
    font-size: 28px;
  }

  img {
    height: 60vh;
  }

  .btn {
    padding: 15px 25px;
    font-size: 14px;
  }
}
</style>
