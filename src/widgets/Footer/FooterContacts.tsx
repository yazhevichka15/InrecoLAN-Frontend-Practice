export function FooterContacts() {
    return (
        <div className="flex flex-col gap-4">
            <div className="space-y-1">
                <p className="text-footer-title">Пн-пт с 9.00 до 20.00</p>
                <p className="text-footer-title">Сб-вс с 10.00 до 18.00</p>
                <p className="text-footer-list text-2xl font-medium">8(4922)44-93-30</p>
                <p className="text-footer-list text-2xl">imperiya_lustr@mail.ru</p>
            </div>

            <div className="flex items-center gap-10 mt-2">
                <img src="/icons/social/Max.webp" className="w-5 h-5 cursor-pointer" alt="Max" />
                <img src="/icons/social/Telegram.webp" className="w-5 h-5 cursor-pointer" alt="Telegram" />
                <img src="/icons/social/Vk.webp" className="w-5 h-5 cursor-pointer" alt="Vk" />
                <img src="/icons/social/Whats.webp" className="w-5 h-5 cursor-pointer" alt="WhatsApp" />
            </div>
        </div>
    )
}