import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const BirthdayCard = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-pink-50 via-purple-50 to-yellow-50">
      <Card className="relative w-full max-w-2xl overflow-hidden bg-white shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B9D] via-[#FFA07A] to-[#FFCB37] opacity-10"></div>
        
        <div className="relative border-8 border-double" style={{ borderColor: 'rgba(255, 203, 55, 0.3)' }}>
          <div className="absolute top-4 left-4 animate-sparkle">
            <Icon name="Sparkles" size={24} className="text-[#FFCB37]" />
          </div>
          <div className="absolute top-4 right-4 animate-sparkle delay-100">
            <Icon name="Sparkles" size={24} className="text-[#FF6B9D]" />
          </div>
          <div className="absolute bottom-4 left-8 animate-sparkle delay-200">
            <Icon name="Sparkles" size={20} className="text-[#FFCB37]" />
          </div>
          <div className="absolute bottom-4 right-8 animate-sparkle delay-300">
            <Icon name="Sparkles" size={20} className="text-[#FF6B9D]" />
          </div>

          <div className="p-12 space-y-8">
            <div className="flex justify-center gap-8 mb-8 animate-float">
              <Icon name="Gift" size={48} className="text-[#FF6B9D]" />
              <Icon name="PartyPopper" size={48} className="text-[#FFCB37]" />
              <Icon name="Cake" size={48} className="text-[#FF6B9D]" />
            </div>

            <div className="text-center space-y-4 animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#FF6B9D] to-[#FFCB37] bg-clip-text text-transparent">
                С Днем Рождения!
              </h1>
              <div className="flex justify-center gap-2">
                {[...Array(7)].map((_, i) => (
                  <Icon 
                    key={i} 
                    name="Star" 
                    size={16} 
                    className="text-[#FFCB37] fill-[#FFCB37]"
                    style={{ animationDelay: `${i * 100}ms` }}
                  />
                ))}
              </div>
            </div>

            <div className="space-y-6 animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <div className="bg-gradient-to-r from-[#FF6B9D]/10 to-[#FFCB37]/10 rounded-lg p-6 border-l-4 border-[#FF6B9D]">
                <h2 className="text-2xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
                  <Icon name="Heart" size={24} className="text-[#FF6B9D] fill-[#FF6B9D]" />
                  Поздравление
                </h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                  В этот особенный день хочется пожелать тебе счастья, радости и исполнения всех мечтаний! 
                  Пусть каждый день приносит новые улыбки, а каждый момент будет наполнен теплом и любовью близких людей.
                </p>
              </div>

              <div className="bg-gradient-to-r from-[#FFCB37]/10 to-[#FF6B9D]/10 rounded-lg p-6 border-l-4 border-[#FFCB37]">
                <h2 className="text-2xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
                  <Icon name="Sparkles" size={24} className="text-[#FFCB37] fill-[#FFCB37]" />
                  Пожелания
                </h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Желаю тебе крепкого здоровья, безграничной энергии и вдохновения на каждый день! 
                  Пусть твои планы сбываются легко, окружают только добрые люди, а жизнь дарит яркие 
                  впечатления и незабываемые моменты. С Днем Рождения! 🎉
                </p>
              </div>
            </div>

            <div className="flex justify-center gap-6 pt-4 animate-float" style={{ animationDelay: '0.5s' }}>
              <Icon name="Balloon" size={40} className="text-[#FF6B9D]" />
              <Icon name="Flame" size={40} className="text-[#FFCB37]" />
              <Icon name="Balloon" size={40} className="text-[#FFCB37]" />
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default BirthdayCard;
