# 🚀 Business Skip – Redesigned for a Modern, Intuitive Experience

This project showcases a redesign of the **Skip Card component** inspired by modern hotel booking cards . The new design prioritizes a clean, intuitive user interface and better responsiveness across devices.

---

## ✨ Key Features

✅ **Modern Card Layout** – Inspired by hotel booking cards, with a flexible two-column structure on larger screens and a single-column layout on mobile.

✅ **Improved Visual Hierarchy** – Clear emphasis on the skip size, price, and hire period, ensuring users can quickly compare and make decisions.

✅ **Dynamic Availability Indicators** – Integrated visual cues (like “No Road Placement” badges and availability toggles) to help users easily understand skip restrictions.

✅ **Interactive “Select Skip” CTA** – Prominent and easily clickable “Select Skip” button to match modern booking experiences.

✅ **Accessibility & Keyboard Navigation** – Fully accessible card selection with `role="button"` and keyboard support.

---

## 🛠️ Technologies Used

- **React & TypeScript** – For building modular, maintainable components.
- **Tailwind CSS** – Utility-first CSS framework for responsive and consistent styling.
- **Lucide Icons** – Clean, customizable icons for enhanced clarity.
- **Custom Assets** – Bin icon and other illustrations to reflect skip size visually.

---

## 🎨 Design Approach

1️⃣ **Inspiration**  
 The hotel booking card served as the primary reference. It features a clear, modular layout with an image thumbnail on the left and booking details on the right.

2️⃣ **Card Component Redesign**

- **Image Section**: Added visual skip size badge (`yds`) and conditional overlays (e.g., "No Road Placement").
- **Details Section**: Clean typography and improved spacing for hire period, skip size, and total price.
- **Action Section**: Prominent "Book Now" button with clear hover states.

3️⃣ **Responsiveness**

- **Grid Layout**: Uses `grid-cols-1` on mobile for full-width cards and `grid-cols-2` on larger screens for side-by-side display.
- **Flex Layout**: Cards adapt from column to row orientation depending on screen size.

4️⃣ **Interactivity & Accessibility**

- Keyboard support for card selection (`Enter` and `Space` keys).
- Focus ring highlighting for clear visual focus.
- Dynamic states for `selected` and `not available` skips.

---

## 🔧 How to Run Locally

```bash
# Clone the repository
git clone https://github.com/Aseadd/business-skip.git
cd business-skip

# Install dependencies
npm install

# Start the development server
npm run dev

## 👥 Author <a name="author"></a>

Addis Tsega

- GitHub: [Aseadd](https://github.com/Aseadd)
- Twitter: [@AdaTsega](https://twitter.com/AdaTsega)
- LinkedIn: [addis-tsega](https://www.linkedin.com/in/addis-tsega/)

## 🤝 Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

---


<!-- LICENSE -->

## 📝 License <a name="license"></a>

This project is [MIT](./MIT.md) licensed.






```
