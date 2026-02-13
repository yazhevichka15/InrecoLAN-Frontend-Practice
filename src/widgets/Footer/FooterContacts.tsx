export function FooterContacts() {
    return (
        <div className="flex flex-col gap-4">
            <div className="space-y-1">
                <p className="text-[#402431]">Пн-пт с 9.00 до 20.00</p>
                <p className="text-[#402431]">Сб-вс с 10.00 до 18.00</p>
                <p className="text-[#95726B] text-2xl font-medium">8(4922)44-93-30</p>
                <p className="text-[#95726B] text-2xl">imperiya_lustr@mail.ru</p>
            </div>

            <div className="flex items-center gap-3 mt-2">
                <img src="icons/social/Max.webp" className="w-5 h-5" alt="Max" />
                <img src="icons/social/Telegram.webp" className="w-5 h-5" alt="Telegram" />
                <img src="icons/social/Vk.webp" className="w-5 h-5" alt="Vk" />
                <img src="icons/social/WhatsApp.webp" className="w-5 h-5" alt="WhatsApp" />
            </div>
        </div>
    )
}