import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ArrowLeft,
  BookOpen,
  Lightbulb,
  AlertTriangle,
  Code,
  Sparkles,
  TrendingUp,
  Clock,
  ExternalLink,
  Copy,
  Check,
} from 'lucide-react';
import { getHookById, categories, difficulties } from '../data/hooksData';
import CodeBlock from '../components/CodeBlock';
import LiveExample from '../components/LiveExample';
import RelatedHooks from '../components/RelatedHooks';

const HookDetailPage = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('overview');
  const [copied, setCopied] = useState(false);

  const hook = getHookById(id || '');

  if (!hook) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Хук не найден
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Запрашиваемый хук не существует
          </p>
          <Link to="/hooks" className="btn-primary">
            Вернуться к списку хуков
          </Link>
        </div>
      </div>
    );
  }

  const category = categories.find(c => c.id === hook.category);
  const difficulty = difficulties.find(d => d.id === hook.difficulty);

  const getDifficultyIcon = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner':
        return <Sparkles className="h-4 w-4" />;
      case 'intermediate':
        return <TrendingUp className="h-4 w-4" />;
      case 'advanced':
        return <Clock className="h-4 w-4" />;
      default:
        return null;
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner':
        return 'bg-success-100 text-success-800 dark:bg-success-900/30 dark:text-success-300 border-success-200 dark:border-success-800';
      case 'intermediate':
        return 'bg-warning-100 text-warning-800 dark:bg-warning-900/30 dark:text-warning-300 border-warning-200 dark:border-warning-800';
      case 'advanced':
        return 'bg-danger-100 text-danger-800 dark:bg-danger-900/30 dark:text-danger-300 border-danger-200 dark:border-danger-800';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300 border-gray-200 dark:border-gray-700';
    }
  };

  const handleCopySyntax = async () => {
    try {
      await navigator.clipboard.writeText(hook.content.syntax);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Ошибка копирования:', err);
    }
  };

  const tabs = [
    { id: 'overview', label: 'Обзор', icon: BookOpen },
    { id: 'examples', label: 'Примеры', icon: Code },
    { id: 'tips', label: 'Советы', icon: Lightbulb },
    { id: 'mistakes', label: 'Ошибки', icon: AlertTriangle },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Breadcrumb */}
          <div className="flex items-center mb-6">
            <Link
              to="/hooks"
              className="flex items-center text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Назад к списку хуков
            </Link>
          </div>

          {/* Hook Info */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <span
                  className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border ${getDifficultyColor(
                    hook.difficulty
                  )}`}
                >
                  {getDifficultyIcon(hook.difficulty)}
                  <span className="ml-1">
                    {difficulty?.name || hook.difficulty}
                  </span>
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {category?.name || hook.category}
                </span>
              </div>

              <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                {hook.title}
              </h1>

              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                {hook.description}
              </p>

              {/* Syntax */}
              <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                    Синтаксис
                  </h3>
                  <button
                    onClick={handleCopySyntax}
                    className={`inline-flex items-center px-2 py-1 text-xs font-medium rounded transition-colors duration-200 ${
                      copied
                        ? 'text-success-700 dark:text-success-300 bg-success-50 dark:bg-success-900/30'
                        : 'text-primary-700 dark:text-primary-300 bg-primary-50 dark:bg-primary-900/30 hover:bg-primary-100 dark:hover:bg-primary-900/50'
                    }`}
                  >
                    {copied ? (
                      <>
                        <Check className="h-3 w-3 mr-1" />
                        Скопировано!
                      </>
                    ) : (
                      <>
                        <Copy className="h-3 w-3 mr-1" />
                        Копировать
                      </>
                    )}
                  </button>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700">
                  <CodeBlock
                    code={hook.content.syntax}
                    language="jsx"
                    title="Синтаксис"
                    description="Базовый синтаксис хука"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {tabs.map(tab => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 border border-primary-200 dark:border-primary-800'
                    : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700'
                }`}
              >
                <Icon className="h-4 w-4 mr-2" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Tab Content */}
        <div className="space-y-8">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                Обзор
              </h2>
              <div className="prose prose-gray dark:prose-invert max-w-none">
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  {hook.content.overview}
                </p>
              </div>
            </div>
          )}

          {/* Examples Tab */}
          {activeTab === 'examples' && (
            <div className="space-y-8">
              <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  Примеры использования
                </h2>
                <div className="space-y-8">
                  {hook.content.examples.map((example, index) => (
                    <div key={index} className="space-y-4">
                      {example.liveExample ? (
                        <LiveExample
                          code={example.code}
                          title={example.title}
                          description={example.description}
                        />
                      ) : (
                        <CodeBlock
                          code={example.code}
                          language="jsx"
                          title={example.title}
                          description={example.description}
                          liveExample={example.liveExample}
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Tips Tab */}
          {activeTab === 'tips' && (
            <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6 flex items-center">
                <Lightbulb className="h-6 w-6 mr-3 text-warning-500" />
                Лучшие практики и советы
              </h2>
              <div className="space-y-4">
                {hook.content.tips.map((tip, index) => (
                  <div
                    key={index}
                    className="flex items-start p-4 bg-warning-50 dark:bg-warning-900/20 border border-warning-200 dark:border-warning-800 rounded-lg"
                  >
                    <div className="flex-shrink-0 w-6 h-6 bg-warning-100 dark:bg-warning-900/30 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-warning-600 dark:text-warning-400 text-sm font-semibold">
                        {index + 1}
                      </span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">{tip}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Mistakes Tab */}
          {activeTab === 'mistakes' && (
            <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6 flex items-center">
                <AlertTriangle className="h-6 w-6 mr-3 text-danger-500" />
                Распространенные ошибки
              </h2>
              <div className="space-y-4">
                {hook.content.commonMistakes.map((mistake, index) => (
                  <div
                    key={index}
                    className="flex items-start p-4 bg-danger-50 dark:bg-danger-900/20 border border-danger-200 dark:border-danger-800 rounded-lg"
                  >
                    <div className="flex-shrink-0 w-6 h-6 bg-danger-100 dark:bg-danger-900/30 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-danger-600 dark:text-danger-400 text-sm font-semibold">
                        {index + 1}
                      </span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">
                      {mistake}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Related Hooks */}
        <div className="mt-12">
          <RelatedHooks currentHookId={hook.id} />
        </div>

        {/* Navigation */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <Link to="/hooks" className="btn-secondary">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Вернуться к списку хуков
            </Link>

            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Поделиться:
              </span>
              <button
                onClick={() =>
                  navigator.share?.({
                    title: `${hook.title} - React Hooks`,
                    url: window.location.href,
                  })
                }
                className="btn-primary"
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                Поделиться
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HookDetailPage;
