'use client'
import { useEffect } from 'react'

export default function ClientScripts(){
  useEffect(()=>{
    // === Theme toggle logic ===
    // ... giữ nguyên nếu có ...

    // Mobile menu
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    if(mobileMenuButton && mobileMenu){
      mobileMenuButton.addEventListener('click', ()=> mobileMenu.classList.toggle('hidden'))
      mobileMenu.querySelectorAll('a').forEach(link => link.addEventListener('click', ()=> mobileMenu.classList.add('hidden')))
    }

    // ===============================
    // Contact form logic (with real validation)
    // ===============================
    const contactForm = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');

    if(contactForm){
      contactForm.addEventListener('submit', function(event){
        event.preventDefault();

        const nameInput = document.getElementById('name');
        const messageInput = document.getElementById('message');
        const name = nameInput.value.trim();
        const message = messageInput.value.trim();

        // Nếu chưa điền đầy đủ
        if(!name || !message){
          formMessage.textContent = 'Vui lòng điền đầy đủ thông tin!';
          formMessage.classList.remove('hidden','text-black-500');
          formMessage.classList.add('text-red-500');
          return; // không gửi tiếp
        }

        // Hiển thị trạng thái gửi
        formMessage.textContent = 'Đang gửi...';
        formMessage.classList.remove('hidden','text-red-500','text-black-500');
        formMessage.classList.add('text-gray-500');

        setTimeout(()=>{
          formMessage.textContent = `Cảm ơn ${name}! Tin nhắn của bạn đã được gửi thành công. Tôi sẽ phản hồi sớm nhất có thể.`;
          formMessage.classList.remove('text-gray-500','text-red-500');
          formMessage.classList.add('text-black-500');
          contactForm.reset();
        },1500);
      })
    }

    // ===============================
    // Pikachu API fetch
    // ===============================
    async function fetchPikachu(){
      const pikachuDataElement = document.getElementById('pikachu-data');
      const toggleShinyButton = document.getElementById('toggle-shiny-button');
      if(!pikachuDataElement) return;
      pikachuDataElement.innerHTML = `<div class="flex justify-center items-center h-48"><svg class="animate-spin h-8 w-8 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg><p class="text-gray-400 ml-3">Đang tải dữ liệu...</p></div>`;
      try{
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/pikachu');
        if(!response.ok) throw new Error('Không thể tải dữ liệu Pikachu.');
        const data = await response.json();
        const pikachuImage = data.sprites.front_default;
        const pikachuAbilities = data.abilities.map(a=>a.ability.name).join(', ');
        const pikachuWeight = data.weight/10;
        pikachuDataElement.innerHTML = `
          <img src="${pikachuImage}" alt="Pikachu" class="mx-auto w-32 h-32 object-contain animate-bounce-y">
          <p class="text-lg text-gray-300 mt-2">Cân nặng: ${pikachuWeight} kg</p>
          <p class="text-md text-gray-400 mt-1">Khả năng: ${pikachuAbilities}</p>
        `;
        if(toggleShinyButton){
          let isShiny=false;
          toggleShinyButton.addEventListener('click', ()=>{
            isShiny=!isShiny;
            const img = pikachuDataElement.querySelector('img');
            img.src = isShiny ? data.sprites.front_shiny : data.sprites.front_default;
            toggleShinyButton.textContent = isShiny ? 'Xem Normal' : 'Xem Shiny';
          })
        }
      }catch(err){
        pikachuDataElement.innerHTML = `<p class="text-red-400">Lỗi: Không tải được Pikachu.</p>`;
      }
    }
    fetchPikachu();

    // ===============================
    // Exchange rate
    // ===============================
    async function fetchExchangeRate(){
      const rateDisplay = document.getElementById('current-rate-display');
      const usdInput = document.getElementById('usd-input');
      const vndInput = document.getElementById('vnd-input');
      const apiUrl = 'https://open.er-api.com/v6/latest/USD';
      try{
        if(rateDisplay) rateDisplay.textContent = 'Đang tải tỷ giá...';
        const response = await fetch(apiUrl);
        if(!response.ok) throw new Error('Không thể kết nối API');
        const data = await response.json();
        const rate = data.rates.VND;
        if(rateDisplay) rateDisplay.textContent = `1 USD = ${rate.toLocaleString('vi-VN')} VND`;
        function updateVND(){
          const usd = parseFloat(usdInput.value) || 0;
          vndInput.value = (usd * rate).toLocaleString('vi-VN');
        }
        if(usdInput){ usdInput.addEventListener('input', updateVND); updateVND(); }
      }catch(err){ if(rateDisplay) rateDisplay.textContent = 'Lỗi tải tỷ giá, thử lại sau.'; console.error(err) }
    }
    const refreshBtn = document.getElementById('refresh-rate-button');
    if(refreshBtn) refreshBtn.addEventListener('click', fetchExchangeRate);
    fetchExchangeRate();

    // ===============================
    // content-section toggles
    // ===============================
    document.querySelectorAll('h2 button').forEach((btn)=>{
      btn.addEventListener('click', ()=>{
        const content = btn.closest('section').querySelector('.content-section');
        if(content) content.classList.toggle('hidden');
      })
    })

  },[])

  return null
}
