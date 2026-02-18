import React, { useState, useEffect, useMemo } from 'react';
import { 
    UploadCloud, Key, Facebook, Chrome, CreditCard, Phone, User, Building2,
    Info, Eye, DollarSign, MousePointer, Percent, CheckCircle, Globe, 
    LayoutDashboard, FileText, Activity, BriefcaseBusiness, Users, ClipboardList, Ticket,
    MessageSquareText, Shield, Sun, Moon , Search
} from 'lucide-react';

/* -----------------------------------------------------------------------
   PURGE OS - GLOBAL STYLES (CSS)
   Constructed from the ground up to mimic Apple Human Interface Guidelines
   without external dependencies.
   Refined for Ultra-Wide & Tall Monitors + Perfect Scrolling
   -----------------------------------------------------------------------
*/
const STYLES = `
:root {
    --bg-primary: #f5f5f7;
    --bg-secondary: #ffffff;
    --bg-tertiary: #e5e5ea;
    --text-primary: #1d1d1f;
    --text-secondary: #86868b;
    --border-color: rgba(0, 0, 0, 0.1);
    --accent-blue: #0071e3;
    --accent-green: #34c759;
    --accent-red: #ff3b30;
    --accent-orange: #ff9500;
    --accent-yellow: #ffcc00;
    --accent-purple: #af52de;
    
    --glass-bg: rgba(255, 255, 255, 0.7);
    --glass-border: rgba(255, 255, 255, 0.5);
    --shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.04);
    --shadow-md: 0 8px 24px rgba(0, 0, 0, 0.08);
}

.dark-mode {
    --bg-primary: #000000;
    --bg-secondary: #1c1c1e;
    --bg-tertiary: #2c2c2e;
    --text-primary: #f5f5f7;
    --text-secondary: #86868b;
    --border-color: rgba(255, 255, 255, 0.1);
    --glass-bg: rgba(28, 28, 30, 0.7);
    --glass-border: rgba(255, 255, 255, 0.1);
    --shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.2);
    --shadow-md: 0 8px 24px rgba(0, 0, 0, 0.4);
}

* { box-sizing: border-box; }

html, body, #root {
    margin: 0;
    padding: 0;
    width: 100vw;
    height: 100vh;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    background-color: var(--bg-primary);
    color: var(--text-primary);
    transition: background-color 0.3s ease, color 0.3s ease;
    overflow: hidden; /* Prevent body scroll, app handles it */
}

/* --- Utilities --- */
.app-container {
    display: flex;
    height: 100%;
    width: 100%;
    overflow: hidden;
}

.glass-panel {
    background: var(--glass-bg);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 1px solid var(--border-color);
    box-shadow: var(--shadow-md);
}

.animate-fade-in { animation: fadeIn 0.4s ease-out; }
.animate-slide-up { animation: slideUp 0.5s cubic-bezier(0.16, 1, 0.3, 1); }

@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
@keyframes slideUp { from { transform: translateY(20px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }

/* --- Scrollbars --- */
::-webkit-scrollbar { width: 8px; height: 8px; }
::-webkit-scrollbar-track { background: transparent; }
::-webkit-scrollbar-thumb { background: var(--text-secondary); border-radius: 4px; opacity: 0.5; }
::-webkit-scrollbar-thumb:hover { background: var(--text-primary); }

/* --- Typography & Elements --- */
h1, h2, h3, h4 { margin: 0; font-weight: 600; letter-spacing: -0.02em; }
p { margin: 0; }
button { font-family: inherit; border: none; cursor: pointer; background: none; }
input, textarea { font-family: inherit; outline: none; }

/* --- Sidebar --- */
.sidebar {
    width: 260px;
    height: 100%;
    background: var(--glass-bg);
    border-right: 1px solid var(--border-color);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px;
    z-index: 50;
    transition: width 0.3s ease;
    flex-shrink: 0;
}

.nav-item {
    display: flex;
    align-items: center;
    padding: 12px;
    margin-bottom: 4px;
    border-radius: 12px;
    color: var(--text-secondary);
    transition: all 0.2s ease;
    font-size: 14px;
    font-weight: 500;
}

.nav-item:hover {
    background-color: var(--bg-tertiary);
    color: var(--text-primary);
}

.nav-item.active {
    background-color: var(--bg-tertiary);
    color: var(--text-primary);
}

.nav-icon { margin-right: 12px; }

/* --- List View (Left Pane) --- */
.client-list-pane {
    width: 350px;
    background: rgba(255,255,255,0.05);
    border-right: 1px solid var(--border-color);
    display: flex;
    flex-direction: column;
    z-index: 40;
    flex-shrink: 0;
}

.list-header {
    padding: 20px;
    background: var(--glass-bg);
    backdrop-filter: blur(15px);
    border-bottom: 1px solid var(--border-color);
    position: sticky;
    top: 0;
    z-index: 10;
}

.search-input {
    width: 100%;
    padding: 10px 12px 10px 36px;
    border-radius: 10px;
    background: var(--bg-tertiary);
    border: none;
    color: var(--text-primary);
    font-size: 14px;
}

.client-card {
    padding: 16px;
    margin: 10px 16px;
    background: var(--bg-secondary);
    border-radius: 16px;
    border: 1px solid transparent;
    transition: all 0.2s ease;
    cursor: pointer;
    position: relative;
}

.client-card:hover {
    box-shadow: var(--shadow-sm);
    transform: scale(1.01);
}

.client-card.selected {
    border-color: var(--accent-blue);
    box-shadow: 0 0 0 1px var(--accent-blue);
}

.status-badge {
    font-size: 10px;
    font-weight: 700;
    text-transform: uppercase;
    padding: 4px 8px;
    border-radius: 12px;
    display: inline-block;
}

.status-active { background: rgba(52, 199, 89, 0.15); color: var(--accent-green); }
.status-inactive { background: rgba(255, 59, 48, 0.15); color: var(--accent-red); }

/* --- Detail View (Right Pane) --- */
.detail-pane {
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow: hidden; /* Important for inner scroll */
    background: var(--bg-primary);
    position: relative;
}

.detail-scroll-container {
    flex: 1;
    overflow-y: auto;
    padding: 40px;
    padding-bottom: 100px;
    width: 100%;
}

.detail-content {
    width: 100%;
    margin: 0 auto;
}

.detail-tabs {
    display: flex;
    gap: 24px;
    border-bottom: 1px solid var(--border-color);
    margin-bottom: 32px;
    position: sticky;
    top: 0;
    padding-top: 10px;
    z-index: 20;
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    background: rgba(var(--bg-primary), 0.8);
}

.tab-btn {
    padding: 12px 0;
    font-size: 14px;
    font-weight: 500;
    color: var(--text-secondary);
    position: relative;
    transition: color 0.2s;
}

.tab-btn:hover { color: var(--text-primary); }

.tab-btn.active {
    color: var(--text-primary);
}

.tab-btn.active::after {
    content: '';
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 100%;
    height: 2px;
    background: var(--text-primary);
}

/* --- Metrics Grid --- */
.metrics-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 24px;
    margin-bottom: 32px;
    width: 100%;
}

.metric-card {
    background: var(--bg-secondary);
    border-radius: 18px;
    padding: 24px;
    border: 1px solid var(--border-color);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 140px;
}

/* --- Table Styles --- */
.custom-table {
    width: 100%;
    border-collapse: collapse;
}
.custom-table th {
    text-align: left;
    padding: 16px;
    font-size: 13px;
    text-transform: uppercase;
    color: var(--text-secondary);
    border-bottom: 1px solid var(--border-color);
    font-weight: 600;
    background: var(--bg-secondary);
}
.custom-table td {
    padding: 16px;
    border-bottom: 1px solid var(--border-color);
    font-size: 14px;
}
.custom-table tr:hover td {
    background-color: var(--bg-tertiary);
}

/* --- Responsive Media Queries --- */
@media (max-width: 1024px) {
    .sidebar { width: 80px; align-items: center; }
    .sidebar-text { display: none; }
    .nav-item { justify-content: center; }
    .nav-icon { margin: 0; }
    .metrics-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 768px) {
    .app-container { flex-direction: column; }
    .sidebar { width: 100%; height: 60px; flex-direction: row; border-right: none; border-bottom: 1px solid var(--border-color); padding: 0 20px; }
    .client-list-pane { width: 100%; height: 300px; }
    .detail-scroll-container { padding: 20px; }
}
`;

// --- Mock Logic Services ---

const generateMockMeta = (accountId) => ({
    impressions: Math.floor(Math.random() * 50000) + 1000,
    spend: (Math.random() * 2000).toFixed(2),
    clicks: Math.floor(Math.random() * 1500) + 50,
    ctr: (Math.random() * 3 + 0.5).toFixed(2),
    campaigns: [
        { name: "Retargeting - Q1", status: "Active", spend: 450.20, results: 45 },
        { name: "Cold Traffic - Broad", status: "Active", spend: 1200.50, results: 120 },
        { name: "Story Ads", status: "Paused", spend: 100.00, results: 5 },
    ],
});

const generateMockGoogle = (accountId) => ({
    impressions: Math.floor(Math.random() * 80000) + 5000,
    cost: (Math.random() * 3000).toFixed(2),
    conversions: Math.floor(Math.random() * 300) + 10,
    costPerConv: (Math.random() * 50 + 10).toFixed(2),
    campaigns: [
        { name: "Search - Brand", status: "Enabled", type: "Search", cost: 500.00 },
        { name: "PMax - All Products", status: "Enabled", type: "Performance Max", cost: 1500.00 },
    ],
});

const generateMockStripe = (customerId) => ({
    mrr: (Math.random() * 5000 + 1000).toFixed(2),
    status: "Active",
    nextBillingDate: "2023-11-01",
    invoices: [
        { id: "inv_123", amount: 1500.00, status: "Paid", date: "2023-10-01" },
        { id: "inv_122", amount: 1500.00, status: "Paid", date: "2023-09-01" },
    ]
});

const getClientServices = (client) => {
    const services = [];
    if (client.metaAccountId) services.push('Meta Ads');
    if (client['Google Ads ID']) services.push('Google Ads');
    return services;
};

const getServiceSummary = (client) => {
    const services = getClientServices(client);
    return services.length ? services.join(' + ') : 'No paid media service linked';
};

// --- Components ---

const ImportView = ({ onImport }) => {
    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (event) => {
            try {
                const json = JSON.parse(event.target.result);
                const clients = json.clients || json;
                onImport(clients);
            } catch (error) {
                alert("Invalid JSON file");
            }
        };
        reader.readAsText(file);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', width: '100%' }} className="animate-fade-in">
            <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                <h1 style={{ fontSize: '48px', marginBottom: '10px' }}>Purge Digital</h1>
                <p style={{ color: 'var(--text-secondary)' }}>Client Management System</p>
            </div>
            
            <div className="glass-panel" style={{ padding: '60px', borderRadius: '30px', maxWidth: '500px', width: '100%', textAlign: 'center' }}>
                <div style={{ background: 'var(--bg-tertiary)', borderRadius: '50%', width: '80px', height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
                    <UploadCloud size={40} color="var(--accent-blue)" />
                </div>
                <h2 style={{ fontSize: '24px', marginBottom: '16px' }}>Import Client Data</h2>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '32px' }}>Upload your JSON file to initialize the CRM.</p>
                
                <label style={{ display: 'block', cursor: 'pointer' }}>
                    <div style={{ 
                        height: '100px', 
                        border: '2px dashed var(--border-color)', 
                        borderRadius: '20px', 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center',
                        transition: '0.2s'
                    }}
                    onMouseOver={(e) => {
                        e.currentTarget.style.borderColor = 'var(--accent-blue)';
                        e.currentTarget.style.backgroundColor = 'rgba(0,113,227,0.05)';
                    }}
                    onMouseOut={(e) => {
                        e.currentTarget.style.borderColor = 'var(--border-color)';
                        e.currentTarget.style.backgroundColor = 'transparent';
                    }}
                    >
                        <span style={{ color: 'var(--accent-blue)', fontWeight: 600 }}>Select File</span>
                    </div>
                    <input type="file" accept=".json" style={{ display: 'none' }} onChange={handleFileUpload} />
                </label>
            </div>
        </div>
    );
};

const PhoneFormatView = ({ clients, onConfirm }) => {
    const [selected, setSelected] = useState({});
    const [formattedClients, setFormattedClients] = useState([]);

    useEffect(() => {
        const processed = clients.map(client => {
            let original = client.phone || "";
            let clean = original.replace(/[\s\-\(\)]/g, "");
            let formatted = clean;

            if (clean.startsWith('0')) formatted = '+61' + clean.substring(1);
            else if (clean.startsWith('61')) formatted = '+' + clean;
            else if (clean.length > 0 && !clean.startsWith('+')) formatted = '+61' + clean;

            return { ...client, originalPhone: original, formattedPhone: formatted, needsFormat: original !== formatted };
        });
        
        setFormattedClients(processed);
        const initialSelection = {};
        processed.forEach(c => { if (c.needsFormat) initialSelection[c.id] = true; });
        setSelected(initialSelection);
    }, [clients]);

    const toggleSelection = (id) => setSelected(prev => ({ ...prev, [id]: !prev[id] }));

    const handleSubmit = () => {
        const finalData = formattedClients.map(c => ({
            ...c,
            phone: selected[c.id] ? c.formattedPhone : c.originalPhone
        }));
        onConfirm(finalData);
    };

    return (
        <div style={{ padding: '40px', width: '100%', height: '100%', display: 'flex', flexDirection: 'column', boxSizing: 'border-box' }} className="animate-fade-in">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px', flexShrink: 0 }}>
                <div>
                    <h1 style={{ fontSize: '32px' }}>Phone Formatting</h1>
                    <p style={{ color: 'var(--text-secondary)', marginTop: '8px' }}>Review and standardize contact numbers to +61 format.</p>
                </div>
                <button 
                    onClick={handleSubmit} 
                    style={{ 
                        background: 'var(--text-primary)', 
                        color: 'var(--bg-primary)', 
                        padding: '12px 32px', 
                        borderRadius: '30px', 
                        fontWeight: 600,
                        fontSize: '16px'
                    }}
                >
                    Confirm & Next
                </button>
            </div>

            <div className="glass-panel" style={{ flex: 1, minHeight: 0, borderRadius: '24px', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                <div style={{ overflowY: 'auto', flex: 1 }}>
                    <table className="custom-table">
                        <thead style={{ background: 'var(--bg-secondary)', position: 'sticky', top: 0, zIndex: 10 }}>
                            <tr>
                                <th style={{ width: '60px', textAlign: 'center' }}>Action</th>
                                <th>Client Name</th>
                                <th>Original Number</th>
                                <th>Formatted Number</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {formattedClients.map(client => (
                                <tr key={client.id} style={{ background: client.needsFormat ? 'transparent' : 'var(--bg-tertiary)' }}>
                                    <td style={{ textAlign: 'center' }}>
                                        <input 
                                            type="checkbox" 
                                            checked={!!selected[client.id]} 
                                            onChange={() => toggleSelection(client.id)}
                                            disabled={!client.needsFormat}
                                            style={{ width: '18px', height: '18px', cursor: 'pointer' }}
                                        />
                                    </td>
                                    <td style={{ fontWeight: 500 }}>{client.businessName}</td>
                                    <td style={{ fontFamily: 'monospace', color: 'var(--text-secondary)' }}>{client.originalPhone}</td>
                                    <td style={{ fontFamily: 'monospace', fontWeight: 600 }}>{client.formattedPhone}</td>
                                    <td>
                                        {client.needsFormat ? (
                                            <span className="status-badge" style={{ background: 'rgba(0, 113, 227, 0.1)', color: 'var(--accent-blue)' }}>Update</span>
                                        ) : (
                                            <span className="status-badge status-active">Clean</span>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

const AuthView = ({ onAuthSuccess }) => {
    const [keys, setKeys] = useState("");
    const [loading, setLoading] = useState(false);

    const handleAuth = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            onAuthSuccess();
        }, 2000);
    };

    return (
        <div style={{ height: '100%', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }} className="animate-fade-in">
            <div className="glass-panel" style={{ width: '100%', maxWidth: '600px', padding: '50px', borderRadius: '30px', position: 'relative', overflow: 'hidden' }}>
                {loading && (
                    <div style={{ position: 'absolute', inset: 0, background: 'var(--bg-secondary)', zIndex: 20, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', opacity: 0.9 }}>
                        <div style={{ width: '40px', height: '40px', border: '3px solid var(--border-color)', borderTopColor: 'var(--accent-blue)', borderRadius: '50%', animation: 'spin 1s linear infinite', marginBottom: '20px' }} />
                        <p style={{ fontWeight: 600 }}>Authenticating Google Ads MCC...</p>
                        <style>{`@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`}</style>
                    </div>
                )}

                <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                    <div style={{ width: '60px', height: '60px', background: 'var(--text-primary)', color: 'var(--bg-primary)', borderRadius: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                        <Key size={28} />
                    </div>
                    <h2 style={{ fontSize: '28px', marginBottom: '10px' }}>API Configuration</h2>
                    <p style={{ color: 'var(--text-secondary)' }}>Enter authentication keys to connect Meta, Google, and Stripe services.</p>
                </div>

                <div style={{ marginBottom: '30px' }}>
                    <textarea 
                        style={{ width: '100%', height: '200px', padding: '20px', borderRadius: '16px', background: 'var(--bg-tertiary)', border: 'none', resize: 'none', fontFamily: 'monospace', fontSize: '12px' }}
                        placeholder={`{
  "airCallId": "...",
  "facebookToken": "...",
  "stripeSecret": "...",
  "googleAds": {
    "devToken": "...",
    "clientId": "..."
  }
}`}
                        value={keys}
                        onChange={(e) => setKeys(e.target.value)}
                    />
                </div>

                <button 
                    onClick={handleAuth}
                    disabled={keys.length < 5}
                    style={{ 
                        width: '100%', 
                        padding: '16px', 
                        background: 'var(--text-primary)', 
                        color: 'var(--bg-primary)', 
                        border: 'none', 
                        borderRadius: '16px', 
                        fontSize: '16px', 
                        fontWeight: 600,
                        opacity: keys.length < 5 ? 0.5 : 1,
                        cursor: keys.length < 5 ? 'not-allowed' : 'pointer'
                    }}
                >
                    Authenticate & Launch
                </button>
            </div>
        </div>
    );
};

// --- Main CRM Logic ---

const normalizeUrl = (url) => {
    if (!url) return null;
    return /^https?:\/\//i.test(url) ? url : `https://${url}`;
};

const getClientLinks = (client) => ({
    website: normalizeUrl(client.website || client.websiteUrl || client.url),
    facebook: normalizeUrl(client.facebook || client.facebookUrl),
    google: normalizeUrl(client.googleBusinessUrl || client.googleUrl || client.googleMapsUrl),
});

const buildWorkItems = (client) => ({
    onboarding: [
        { title: 'Brand intake form completed', status: 'done' },
        { title: 'Asset access granted (Meta/Google)', status: client.metaAccountId || client['Google Ads ID'] ? 'in_progress' : 'todo' },
        { title: 'Tracking + analytics verification', status: 'todo' },
        { title: 'Campaign kickoff checklist', status: 'todo' },
    ],
    tickets: [
        { id: `TK-${client.id || '0'}-01`, title: 'Creative feedback requested', priority: 'High', status: 'In Progress' },
        { id: `TK-${client.id || '0'}-02`, title: 'Landing page CTA alignment', priority: 'Medium', status: 'Todo' },
    ],
    messages: [
        { from: 'agent', text: `Hi ${client.contactName || 'there'}, we have updated your account summary.` },
        { from: 'client', text: 'Perfect, thank you. Can we review ad performance tomorrow?' },
        { from: 'agent', text: 'Absolutely. I have added that to your queue.' },
    ],
});

const getNavMetadata = (clients) => {
    const withWork = clients.map(client => ({ client, work: buildWorkItems(client) }));
    return {
        clients,
        onboards: withWork.filter(({ work }) => work.onboarding.some(step => step.status !== 'done')).map(({ client, work }) => ({ client, work })),
        tickets: withWork.filter(({ work }) => work.tickets.length > 0).map(({ client, work }) => ({ client, work })),
        messages: withWork.filter(({ work }) => work.messages.length > 0).map(({ client, work }) => ({ client, work })),
    };
};

const CRMView = ({ clients }) => {
    const [selectedId, setSelectedId] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [activeTab, setActiveTab] = useState('overview');
    const [darkMode, setDarkMode] = useState(false);
    const [navTab, setNavTab] = useState('clients');

    const navData = useMemo(() => getNavMetadata(clients), [clients]);

    const selectedCollection = useMemo(() => {
        if (navTab === 'clients') return navData.clients.map(client => ({ client, work: buildWorkItems(client) }));
        return navData[navTab] || [];
    }, [navTab, navData]);

    const filteredClients = useMemo(() => {
        if (!searchTerm) return selectedCollection;
        const lower = searchTerm.toLowerCase();
        return selectedCollection.filter(({ client }) =>
            (client.businessName || '').toLowerCase().includes(lower) ||
            (client.contactName || '').toLowerCase().includes(lower) ||
            (client.phone || '').includes(lower)
        );
    }, [selectedCollection, searchTerm]);

    const selectedRecord = useMemo(() => filteredClients.find(({ client }) => client.id === selectedId) || selectedCollection.find(({ client }) => client.id === selectedId), [filteredClients, selectedCollection, selectedId]);
    const selectedClient = selectedRecord?.client || null;

    useEffect(() => {
        if (filteredClients.length > 0 && !filteredClients.some(({ client }) => client.id === selectedId)) {
            setSelectedId(filteredClients[0].client.id);
        }
        if (filteredClients.length === 0) {
            setSelectedId(null);
        }
    }, [filteredClients, selectedId]);

    useEffect(() => {
        setActiveTab('overview');
        setSearchTerm('');
    }, [navTab]);

    const mockData = useMemo(() => {
        if (!selectedClient) return {};
        return {
            meta: selectedClient.metaAccountId ? generateMockMeta(selectedClient.metaAccountId) : null,
            google: selectedClient['Google Ads ID'] ? generateMockGoogle(selectedClient['Google Ads ID']) : null,
            stripe: selectedClient.stripeCustomerId ? generateMockStripe(selectedClient.stripeCustomerId) : null,
        };
    }, [selectedClient]);

    const links = selectedClient ? getClientLinks(selectedClient) : {};

    useEffect(() => {
        document.documentElement.className = darkMode ? 'dark-mode' : '';
    }, [darkMode]);

    const listTitle = navTab === 'clients' ? 'Clients' : navTab === 'onboards' ? 'Onboarding' : navTab === 'tickets' ? 'Tickets' : 'Messages';
    const searchPlaceholder = navTab === 'clients' ? 'Search clients, phones...' : `Search ${listTitle.toLowerCase()} clients...`;

    const detailTabs = [
        { id: 'overview', label: 'Overview', icon: LayoutDashboard },
        { id: 'billing', label: 'Billing', icon: CreditCard },
        { id: 'meta', label: 'Meta Ads', icon: Facebook },
        { id: 'google', label: 'Google Ads', icon: Chrome },
        { id: 'seo', label: 'SEO', icon: Globe },
        { id: 'activity', label: 'Activity', icon: Activity },
        { id: 'messages', label: 'Messages', icon: MessageSquareText },
        { id: 'tickets', label: 'Tickets', icon: Ticket },
    ];

    const renderNavSpecificContent = () => {
        if (!selectedRecord) return null;
        const { work } = selectedRecord;

        if (navTab === 'onboards') {
            return (
                <div className="animate-slide-up glass-panel" style={{ borderRadius: '24px', padding: '24px' }}>
                    <h3 style={{ marginBottom: '18px' }}>Onboarding Steps</h3>
                    <div style={{ display: 'grid', gap: '10px' }}>
                        {work.onboarding.map((step, idx) => {
                            const isDone = step.status === 'done';
                            const inProgress = step.status === 'in_progress';
                            return (
                                <div key={idx} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 16px', borderRadius: '12px', background: 'var(--bg-tertiary)' }}>
                                    <p style={{ fontSize: '14px', fontWeight: 500 }}>{step.title}</p>
                                    <span className="status-badge" style={{ background: isDone ? 'rgba(52,199,89,0.15)' : inProgress ? 'rgba(255,149,0,0.15)' : 'rgba(134,134,139,0.15)', color: isDone ? 'var(--accent-green)' : inProgress ? 'var(--accent-orange)' : 'var(--text-secondary)' }}>
                                        {isDone ? 'Done' : inProgress ? 'In Progress' : 'Todo'}
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            );
        }

        if (navTab === 'tickets' || activeTab === 'tickets') {
            return (
                <div className="animate-slide-up glass-panel" style={{ borderRadius: '24px', padding: '16px' }}>
                    <h3 style={{ margin: '8px 8px 14px' }}>Tickets Board</h3>
                    <div style={{ display: 'grid', gap: '10px' }}>
                        {work.tickets.map((ticketItem) => (
                            <div key={ticketItem.id} style={{ padding: '16px', borderRadius: '14px', border: '1px solid var(--border-color)', background: 'var(--bg-secondary)' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', gap: '12px', marginBottom: '8px' }}>
                                    <strong>{ticketItem.title}</strong>
                                    <span className="status-badge" style={{ background: 'rgba(0,113,227,0.12)', color: 'var(--accent-blue)' }}>{ticketItem.status}</span>
                                </div>
                                <div style={{ display: 'flex', gap: '12px', color: 'var(--text-secondary)', fontSize: '13px' }}>
                                    <span>{ticketItem.id}</span>
                                    <span>Priority: {ticketItem.priority}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            );
        }

        if (navTab === 'messages' || activeTab === 'messages') {
            return (
                <div className="animate-slide-up glass-panel" style={{ borderRadius: '24px', padding: '20px', display: 'grid', gap: '12px' }}>
                    <h3 style={{ marginBottom: '8px' }}>Messages</h3>
                    {work.messages.map((message, index) => (
                        <div key={index} style={{ maxWidth: '70%', justifySelf: message.from === 'agent' ? 'end' : 'start', padding: '12px 14px', borderRadius: '14px', background: message.from === 'agent' ? 'var(--accent-blue)' : 'var(--bg-tertiary)', color: message.from === 'agent' ? 'white' : 'var(--text-primary)' }}>
                            {message.text}
                        </div>
                    ))}
                </div>
            );
        }

        return null;
    };

    return (
        <div className="app-container">
            <div className="sidebar">
                <div>
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '40px', paddingLeft: '10px' }}>
                        <div style={{ width: '36px', height: '36px', background: 'var(--text-primary)', color: 'var(--bg-primary)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, marginRight: '12px' }}>P</div>
                        <div className="sidebar-text">
                            <h3 style={{ fontSize: '16px', lineHeight: 1 }}>Purge Digital</h3>
                            <span style={{ fontSize: '11px', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '1px' }}>Client OS</span>
                        </div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                        {[
                            { id: 'clients', icon: Users, label: 'Clients' },
                            { id: 'onboards', icon: ClipboardList, label: 'Onboarding' },
                            { id: 'tickets', icon: Ticket, label: 'Tickets' },
                            { id: 'messages', icon: MessageSquareText, label: 'Messages' },
                        ].map(item => (
                            <div
                                key={item.id}
                                className={`nav-item ${navTab === item.id ? 'active' : ''}`}
                                onClick={() => setNavTab(item.id)}
                                style={{ cursor: 'pointer' }}
                            >
                                <item.icon size={20} className="nav-icon" />
                                <span className="sidebar-text">{item.label}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div>
                    <div className="nav-item" onClick={() => setNavTab('admin')} style={{ cursor: 'pointer' }}>
                        <Shield size={20} className="nav-icon" />
                        <span className="sidebar-text">Admin</span>
                    </div>
                    <div className="nav-item" onClick={() => setDarkMode(!darkMode)} style={{ cursor: 'pointer' }}>
                        {darkMode ? <Moon size={20} className="nav-icon" /> : <Sun size={20} className="nav-icon" />}
                        <span className="sidebar-text">{darkMode ? 'Dark Mode' : 'Light Mode'}</span>
                    </div>
                </div>
            </div>

            <div className="client-list-pane">
                <div className="list-header">
                    <h2 style={{ fontSize: '20px', marginBottom: '16px' }}>{listTitle}</h2>
                    <div style={{ position: 'relative' }}>
                        <Search size={16} style={{ position: 'absolute', left: '12px', top: '12px', color: 'var(--text-secondary)' }} />
                        <input
                            className="search-input"
                            placeholder={searchPlaceholder}
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>
                <div style={{ overflowY: 'auto', flex: 1, padding: '10px 0' }}>
                    {filteredClients.map(({ client, work }) => (
                        <div
                            key={client.id}
                            className={`client-card ${selectedId === client.id ? 'selected' : ''}`}
                            onClick={() => setSelectedId(client.id)}
                        >
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                                <h4 style={{ fontSize: '15px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '180px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                                    <Building2 size={13} />
                                    {client.businessName}
                                </h4>
                                <span className={`status-badge ${client.status === 'Inactive' ? 'status-inactive' : 'status-active'}`}>
                                    {client.status || 'Active'}
                                </span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', fontSize: '13px', color: 'var(--text-secondary)' }}>
                                <BriefcaseBusiness size={12} style={{ marginRight: '6px' }} />
                                <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '200px' }}>
                                    {navTab === 'tickets' ? `${work.tickets.length} open tickets` : navTab === 'messages' ? `${work.messages.length} recent messages` : getServiceSummary(client)}
                                </span>
                            </div>
                            <div style={{ display: 'flex', gap: '6px', marginTop: '12px' }}>
                                {client.metaAccountId && <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent-blue)' }} />}
                                {client['Google Ads ID'] && <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent-yellow)' }} />}
                                {client.stripeCustomerId && <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent-purple)' }} />}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="detail-pane">
                {selectedClient ? (
                    <>
                        <div className="detail-tabs" style={{ margin: '0 24px', paddingLeft: '8px', paddingRight: '8px', borderRadius: '14px' }}>
                            {detailTabs.map(tab => (
                                <button
                                    key={tab.id}
                                    className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                                    onClick={() => setActiveTab(tab.id)}
                                    style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
                                >
                                    <tab.icon size={16} />
                                    <span>{tab.label}</span>
                                </button>
                            ))}
                        </div>

                        <div className="detail-scroll-container">
                            <div className="detail-content animate-fade-in">
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '34px' }}>
                                    <div>
                                        <h1 style={{ fontSize: '36px', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                            <Building2 size={30} />
                                            {selectedClient.businessName}
                                        </h1>
                                        <div style={{ display: 'flex', gap: '20px', color: 'var(--text-secondary)', flexWrap: 'wrap' }}>
                                            <span style={{ display: 'flex', alignItems: 'center' }}><User size={16} style={{ marginRight: '6px' }} /> {selectedClient.contactName}</span>
                                            <a href={`tel:${selectedClient.phone || ''}`} style={{ display: 'flex', alignItems: 'center', color: 'var(--accent-blue)', textDecoration: 'none' }}><Phone size={16} style={{ marginRight: '6px' }} /> {selectedClient.phone || 'No phone'}</a>
                                            <a href={`mailto:${selectedClient.email || ''}`} style={{ display: 'flex', alignItems: 'center', color: 'var(--accent-blue)', textDecoration: 'none' }}><Info size={16} style={{ marginRight: '6px' }} /> {selectedClient.email || 'No email'}</a>
                                        </div>
                                    </div>
                                    <div style={{ display: 'flex', gap: '10px' }}>
                                        {links.facebook && <a href={links.facebook} target="_blank" rel="noreferrer" style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--bg-tertiary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-primary)' }}><Facebook size={18} /></a>}
                                        {links.google && <a href={links.google} target="_blank" rel="noreferrer" style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--bg-tertiary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-primary)' }}><Chrome size={18} /></a>}
                                        {links.website && <a href={links.website} target="_blank" rel="noreferrer" style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--bg-tertiary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-primary)' }}><Globe size={18} /></a>}
                                    </div>
                                </div>

                                {navTab !== 'clients' ? renderNavSpecificContent() : null}

                                {activeTab === 'overview' && navTab === 'clients' && (
                                    <div className="animate-slide-up" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '24px' }}>
                                        <div className="glass-panel" style={{ padding: '24px', borderRadius: '24px' }}>
                                            <h3 style={{ marginBottom: '24px', display: 'flex', alignItems: 'center' }}><Info size={18} style={{ marginRight: '10px' }} /> Client Details</h3>
                                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                                                <div>
                                                    <label style={{ fontSize: '11px', textTransform: 'uppercase', color: 'var(--text-secondary)', fontWeight: 600, letterSpacing: '0.5px' }}>Contact Email</label>
                                                    <a href={`mailto:${selectedClient.email || ''}`} style={{ display: 'inline-block', fontSize: '16px', marginTop: '4px', color: 'var(--accent-blue)', fontWeight: 500, textDecoration: 'none' }}>{selectedClient.email || 'No email'}</a>
                                                </div>
                                                <div>
                                                    <label style={{ fontSize: '11px', textTransform: 'uppercase', color: 'var(--text-secondary)', fontWeight: 600, letterSpacing: '0.5px' }}>Formatted Phone</label>
                                                    <a href={`tel:${selectedClient.phone || ''}`} style={{ display: 'inline-block', fontSize: '16px', marginTop: '4px', color: 'var(--accent-blue)', fontWeight: 500, textDecoration: 'none' }}>{selectedClient.phone || 'No phone'}</a>
                                                </div>
                                                <div style={{ gridColumn: 'span 2' }}>
                                                    <label style={{ fontSize: '11px', textTransform: 'uppercase', color: 'var(--text-secondary)', fontWeight: 600, letterSpacing: '0.5px' }}>Service Industry</label>
                                                    <div style={{ marginTop: '8px', padding: '12px', background: 'var(--bg-tertiary)', borderRadius: '12px', fontSize: '14px', lineHeight: 1.5, whiteSpace: 'pre-wrap' }}>
                                                        {selectedClient.service}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="glass-panel" style={{ padding: '24px', borderRadius: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px', background: 'var(--bg-tertiary)', borderRadius: '12px', fontSize: '14px' }}>
                                                <span style={{ color: 'var(--text-secondary)' }}>Budget</span>
                                                <span style={{ fontWeight: 600 }}>{selectedClient.budget}</span>
                                            </div>
                                            <div style={{ padding: '16px', background: 'rgba(255, 204, 0, 0.1)', color: '#b38f00', borderRadius: '12px', fontSize: '13px', lineHeight: 1.4 }}>
                                                <strong>Note:</strong> {selectedClient.notes || 'No notes available'}
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {activeTab === 'meta' && navTab === 'clients' && (
                                    <div className="animate-slide-up">
                                        {!mockData.meta ? (
                                            <div className="glass-panel" style={{ padding: '60px', borderRadius: '24px', textAlign: 'center' }}>
                                                <Facebook size={48} style={{ color: 'var(--text-secondary)', marginBottom: '16px' }} />
                                                <h3>No Meta Account Linked</h3>
                                            </div>
                                        ) : (
                                            <>
                                                <div style={{ marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)' }}>
                                                    <Facebook size={16} /> Meta Ads ID: <strong style={{ color: 'var(--text-primary)' }}>{selectedClient.metaAccountId}</strong>
                                                </div>
                                                <div className="metrics-grid">
                                                    <div className="metric-card"><p style={{ fontSize: '12px', color: 'var(--text-secondary)', fontWeight: 600, textTransform: 'uppercase' }}>Impressions</p><p style={{ fontSize: '24px', fontWeight: 700 }}>{mockData.meta.impressions.toLocaleString()}</p></div>
                                                    <div className="metric-card"><p style={{ fontSize: '12px', color: 'var(--text-secondary)', fontWeight: 600, textTransform: 'uppercase' }}>Spend</p><p style={{ fontSize: '24px', fontWeight: 700 }}>${mockData.meta.spend}</p></div>
                                                    <div className="metric-card"><p style={{ fontSize: '12px', color: 'var(--text-secondary)', fontWeight: 600, textTransform: 'uppercase' }}>Clicks</p><p style={{ fontSize: '24px', fontWeight: 700 }}>{mockData.meta.clicks}</p></div>
                                                </div>
                                            </>
                                        )}
                                    </div>
                                )}

                                {activeTab === 'google' && navTab === 'clients' && (
                                    <div className="animate-slide-up">
                                        {!mockData.google ? (
                                            <div className="glass-panel" style={{ padding: '60px', borderRadius: '24px', textAlign: 'center' }}>
                                                <Search size={48} style={{ color: 'var(--text-secondary)', marginBottom: '16px' }} />
                                                <h3>No Google Ads Account Linked</h3>
                                            </div>
                                        ) : (
                                            <div style={{ marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)' }}>
                                                <Chrome size={16} /> Google Ads ID: <strong style={{ color: 'var(--text-primary)' }}>{selectedClient['Google Ads ID']}</strong>
                                            </div>
                                        )}
                                    </div>
                                )}

                                {activeTab === 'billing' && navTab === 'clients' && (
                                    <div className="animate-slide-up">
                                        {!mockData.stripe ? (
                                            <div className="glass-panel" style={{ padding: '60px', borderRadius: '24px', textAlign: 'center' }}>
                                                <CreditCard size={48} style={{ color: 'var(--text-secondary)', marginBottom: '16px' }} />
                                                <h3>No Billing Account Connected</h3>
                                            </div>
                                        ) : (
                                            <div className="glass-panel" style={{ borderRadius: '24px', padding: '24px' }}>
                                                <h3 style={{ marginBottom: '12px' }}>Current MRR</h3>
                                                <p style={{ fontSize: '34px', fontWeight: 700 }}>${mockData.stripe.mrr}</p>
                                            </div>
                                        )}
                                    </div>
                                )}

                                {(activeTab === 'seo' || activeTab === 'activity') && navTab === 'clients' && (
                                    <div className="animate-slide-up glass-panel" style={{ padding: '80px', borderRadius: '24px', textAlign: 'center' }}>
                                        {activeTab === 'seo' ? <Globe size={48} style={{ color: 'var(--text-secondary)', marginBottom: '16px' }} /> : <Activity size={48} style={{ color: 'var(--text-secondary)', marginBottom: '16px' }} />}
                                        <h3>{activeTab.toUpperCase()} Data</h3>
                                        <p style={{ color: 'var(--text-secondary)' }}>Live feed connecting...</p>
                                    </div>
                                )}

                                {(activeTab === 'messages' || activeTab === 'tickets') && navTab === 'clients' && renderNavSpecificContent()}
                            </div>
                        </div>
                    </>
                ) : (
                    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: 'var(--text-secondary)' }}>
                        <LayoutDashboard size={64} style={{ marginBottom: '16px', opacity: 0.2 }} />
                        <p style={{ fontSize: '18px' }}>Select a client to view details</p>
                    </div>
                )}
            </div>
        </div>
    );
};

// --- App Orchestrator ---

const App = () => {
    const [step, setStep] = useState('import');
    const [clients, setClients] = useState([]);

    useEffect(() => {
        // Inject styles
        const styleEl = document.createElement('style');
        styleEl.textContent = STYLES;
        document.head.appendChild(styleEl);
        return () => document.head.removeChild(styleEl);
    }, []);

    return (
        <>
            {step === 'import' && <ImportView onImport={(data) => { setClients(data); setStep('format'); }} />}
            {step === 'format' && <PhoneFormatView clients={clients} onConfirm={(data) => { setClients(data); setStep('auth'); }} />}
            {step === 'auth' && <AuthView onAuthSuccess={() => setStep('dashboard')} />}
            {step === 'dashboard' && <CRMView clients={clients} />}
        </>
    );
};

export default App;
