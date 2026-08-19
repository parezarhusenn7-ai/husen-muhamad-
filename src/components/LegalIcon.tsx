import {
  Scale,
  ShieldCheck,
  FileText,
  Building2,
  Gavel,
  BookOpenCheck,
  Briefcase,
  Home,
  ScrollText,
  FolderCheck,
  Building,
  MessageSquareText,
  Landmark,
  Zap,
  Award,
  Lock,
  Lightbulb,
  Clock,
  Phone,
  MessageCircle,
  MapPin,
  Share2,
  UserCheck,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Menu,
  X,
  QrCode,
  Download,
  Copy,
  ExternalLink,
  Sparkles,
  ArrowUpRight
} from 'lucide-react';

interface LegalIconProps {
  name: string;
  className?: string;
}

export function LegalIcon({ name, className = 'w-6 h-6' }: LegalIconProps) {
  switch (name) {
    case 'Scale':
      return <Scale className={className} />;
    case 'ShieldCheck':
      return <ShieldCheck className={className} />;
    case 'FileText':
      return <FileText className={className} />;
    case 'Building2':
      return <Building2 className={className} />;
    case 'Gavel':
      return <Gavel className={className} />;
    case 'BookOpenCheck':
      return <BookOpenCheck className={className} />;
    case 'Briefcase':
      return <Briefcase className={className} />;
    case 'Home':
      return <Home className={className} />;
    case 'ScrollText':
      return <ScrollText className={className} />;
    case 'FolderCheck':
      return <FolderCheck className={className} />;
    case 'Building':
      return <Building className={className} />;
    case 'MessageSquareText':
      return <MessageSquareText className={className} />;
    case 'Landmark':
      return <Landmark className={className} />;
    case 'Zap':
      return <Zap className={className} />;
    case 'Award':
      return <Award className={className} />;
    case 'Lock':
      return <Lock className={className} />;
    case 'Lightbulb':
      return <Lightbulb className={className} />;
    case 'Clock':
    case 'ClockCheck':
      return <Clock className={className} />;
    case 'Phone':
      return <Phone className={className} />;
    case 'MessageCircle':
      return <MessageCircle className={className} />;
    case 'MapPin':
      return <MapPin className={className} />;
    case 'Share2':
      return <Share2 className={className} />;
    case 'UserCheck':
      return <UserCheck className={className} />;
    case 'CheckCircle2':
      return <CheckCircle2 className={className} />;
    case 'ChevronLeft':
      return <ChevronLeft className={className} />;
    case 'ChevronRight':
      return <ChevronRight className={className} />;
    case 'Menu':
      return <Menu className={className} />;
    case 'X':
      return <X className={className} />;
    case 'QrCode':
      return <QrCode className={className} />;
    case 'Download':
      return <Download className={className} />;
    case 'Copy':
      return <Copy className={className} />;
    case 'ExternalLink':
      return <ExternalLink className={className} />;
    case 'Sparkles':
      return <Sparkles className={className} />;
    case 'ArrowUpRight':
      return <ArrowUpRight className={className} />;
    default:
      return <Scale className={className} />;
  }
}
